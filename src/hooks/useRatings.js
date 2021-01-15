import {useState, useEffect} from "react";
import RatingModel from '../models/RatingModel';

function useRatings(companyId) {
    const [ratings, setRatings] = useState([]);

    function fetchRatings(id) {
        RatingModel.company(id).then((data) => {
            setRatings(data.reviews);
        });
    };

    useEffect(
        function() {
            fetchRatings(companyId);
        },
        [companyId]
    );
    
    return [ratings, fetchRatings];
};

export default useRatings;