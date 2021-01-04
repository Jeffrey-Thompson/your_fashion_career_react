import React from 'react';

function RatingCard(props) {
    console.log(props.review)
    return (
        <div>
            <h1>{props.review.text}</h1>
        </div>
    )
}
    
    

export default RatingCard;