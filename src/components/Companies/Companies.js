import React from "react";
import CompanyCard from './CompanyCard';

const Company = (props) => {
    function generateCompanyCards(companies) {
        return companies.map(company => {
            return <CompanyCard key={company._id} company={company} />
        });
    }

    return (
        <div>
            {generateCompanyCards(props.data)}
        </div>
    )
}

export default Company;