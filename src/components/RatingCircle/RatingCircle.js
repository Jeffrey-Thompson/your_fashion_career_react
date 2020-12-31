import React from 'react';

import './circle.css';

const RatingCircle = (props) => {
    const rating = props.rating;
    console.log(props.rating);
    console.log(rating);
    const percentage = (rating*100)/5;
    console.log(percentage);
    const classes = `c100 p${percentage}`;

    return (
        <div className={classes}>
            <span>{percentage}%</span>
            <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
            </div>
        </div>
    )
}

export default RatingCircle;