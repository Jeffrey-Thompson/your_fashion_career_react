import {useState, useEffect} from "react";
import CompanyModel from "../models/CompanyModel";

function useCompanies(companyId) {
    const [companies, setCompany] = useState([]);

    function fetchCompanies(id) {
        if (id) {
            CompanyModel.show(id).then((data) => {
                setCompany(data.company);
            });
        } else {
            CompanyModel.all().then((data) => {
                setCompany(data.companies);
            });
        }
    }

    useEffect(
        function () {
            fetchCompanies(companyId);
        },
        [companyId]
    );

    return [companies, fetchCompanies];
}

export default useCompanies;