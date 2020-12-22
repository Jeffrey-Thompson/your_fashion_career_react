import React from "react";
import Companies from "../components/Companies/Companies";
import useCompanies from "../hooks/useCompanies";

const AllCompanies = (props) => {
    const [companies, fetchCompanies] = useCompanies();

    return (
        <div>
            <h1>All Companies Page</h1>
            {companies.length ? <Companies data={companies} /> : <h1>Loading...</h1>}
        </div>
    )
}

export default AllCompanies;