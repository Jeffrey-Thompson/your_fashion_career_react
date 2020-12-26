import {useState, useEffect} from "react";
import CompanyModel from "../models/CompanyModel";

function useSearch(event) {
    const [companies, setCompany] = useState([]);
    const name = event.target.name.value;
    const type = event.target.type.value;
    const location = event.target.location.value;
    console.log(name, type, location);

    function fetchCompanies(name) {
        CompanyModel.all().then((data) => {
            console.log('set from search')
            setCompany(data.companies);
        });
    }

    return [companies, fetchCompanies];
}

export default useSearch;