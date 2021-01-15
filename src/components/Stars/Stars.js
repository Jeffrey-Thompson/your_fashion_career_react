import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
    iconFilled: {
        color: '#404041'
    },
    iconHover: {
        color: '#404041'
    },
})(Rating);


function Stars(props) {
    return (
        <StyledRating value={props.overall} readOnly precision={0.1} />
    )
}

export default Stars;