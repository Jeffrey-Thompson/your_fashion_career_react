import React from 'react';
import RatingCard from './RatingCard';

const Ratings = (props) => {

    function generateRatingsCards(ratings) {
        return ratings.map(rating => {
            return <RatingCard review={rating} key={rating._id} />
        });
    };

    return(
        <div>
            {generateRatingsCards(props.data)}
        </div>
    );
}

export default Ratings;