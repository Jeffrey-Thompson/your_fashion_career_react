import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import './circle.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.text.primary,
        alignItems: 'center',
        width: '100px',
        marginBottom: '10px',
    },
    label: {
        textAlign: "center"
    }
}));

const RatingCircle = (props) => {
    const rating = props.rating;
    const percentage = Math.round((rating*100)/5);
    const round = Math.round(rating);
    const circle = `c100 p${percentage} purple small`;
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box>
                <div className={circle}>
                    <Typography variant='body1' component='span'>{round}/5</Typography>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
            </Box>
            <Typography variant='body1' component='span' className={classes.label}>{props.name}</Typography>
        </Box>
    )
}

export default RatingCircle;