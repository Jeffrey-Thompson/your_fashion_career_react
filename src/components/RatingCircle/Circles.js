import React from 'react';
import RatingCircle from './RatingCircle';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    circleRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around'
    }
}));

function Circles(props) {
    const classes = useStyles();
    const {workLife, salary, treatment, diversity, sustainability, development, authenticity, management, growth, freedom} = props.company;
    

    return(
        <Box className={classes.circleRow}>
                <RatingCircle rating={workLife} name='Work-Life' ></RatingCircle>
                <RatingCircle rating={salary} name='Salary' ></RatingCircle>
                <RatingCircle rating={development} name='Career Development' ></RatingCircle>
                <RatingCircle rating={treatment} name='Kindness' ></RatingCircle>
                <RatingCircle rating={diversity} name='Diversity' ></RatingCircle>
                <RatingCircle rating={sustainability} name='Sustainable Practice'  ></RatingCircle>
                <RatingCircle rating={authenticity} name='Authenticity' ></RatingCircle>
                <RatingCircle rating={management} name='Management' ></RatingCircle>
                <RatingCircle rating={growth} name='Growth' ></RatingCircle>
                <RatingCircle rating={freedom} name='Creative Freedom' ></RatingCircle>
        </Box>
    )
}

export default Circles;