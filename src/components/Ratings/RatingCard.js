import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary
    }
}));

function RatingCard(props) {
    const classes = useStyles();
    const { reviewTitle, text, overall } = props.review;

    return (
        <Card className={classes.root}>
            <Typography variant='h3'>{reviewTitle}</Typography>
        </Card>
    )
}
    
    

export default RatingCard;