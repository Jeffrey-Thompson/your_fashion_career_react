import {useState, useEffect} from "react";
import CompanyModel from "../models/CompanyModel";

function useCompanies(companyId) {
    const [companies, setCompany] = useState([]);

    function fetchCompanies(id) {
        if (id) {
            CompanyModel.show(id).then((data) => {
                setCompany(data.companies);
            });
        } else {
            CompanyModel.all().then((data) => {
                setCompany(data.companies);
            });
        }
    }

    function searchCompanies(event) {
        event.preventDefault();
        CompanyModel.all().then((data) => {
            console.log(event.target.name.value);
            setCompany(data.companies);
        });
    }

    useEffect(
        function () {
            fetchCompanies(companyId);
        },
        [companyId]
    );

    return [companies, fetchCompanies, searchCompanies];
}

export default useCompanies;