import React from 'react';
import useCompanies from '../hooks/useCompanies'

const CompanyShow = (props) => {
    const [company] = useCompanies(props.match.params.id);

    return (
        <h1>{company.name}</h1>
    )
}

export default CompanyShow;