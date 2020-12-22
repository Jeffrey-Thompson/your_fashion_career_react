import React from "react";
import useCompanies from "../hooks/useCompanies";

const AllCompanies = (props) => {
    const [companies, fetchCompanies] = useCompanies();
    
    return (
        <h1>All Companies Page</h1>
    )
}

export default AllCompanies;