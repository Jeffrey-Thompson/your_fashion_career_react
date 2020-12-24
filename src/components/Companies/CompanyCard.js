import React from 'react';

const CompanyCard = (props) => {
    const {name} = props.company;

    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}

export default CompanyCard;