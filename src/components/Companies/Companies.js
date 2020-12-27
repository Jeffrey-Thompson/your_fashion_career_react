import React from "react";
import CompanyCard from './CompanyCard';

const Company = (props) => {
    function generateCompanyCards(companies) {
        return companies.map(company => {
            if (props.nameFilter || props.typeFilter || props.locationFilter) {
                let testName = true;
                let testType = true;
                let testLocation = true;
                if (props.nameFilter) {
                    if (company.name.includes(props.nameFilter)) {
                        testName=true;
                    } else {
                        testName=false;
                    }
                } 
                if (props.typeFilter) {
                    if (company.type.includes(props.typeFilter)) {
                        testType=true;
                    } else {
                        testType=false;
                    }
                }
                if (props.locationFilter) {
                    if (company.location.includes(props.locationFilter)) {
                        testLocation=true;
                    } else {
                        testLocation=false; 
                    }
                }
                if (testName && testType && testLocation) {
                    return <CompanyCard key={company._id} company={company} />
                }
            } else {
                return <CompanyCard key={company._id} company={company} />
            }
        });
    }

    return (
        <div>
            {generateCompanyCards(props.data)}
        </div>
    )
}

export default Company;