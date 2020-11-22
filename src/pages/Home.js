import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 900,
    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h1'>Your Fashion Career starts now!</Typography>
        </div>
    );
};

export default Home;