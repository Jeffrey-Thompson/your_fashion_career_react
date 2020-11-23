import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 900,
    },
    subheading: {
        fontFamily: 'Druk'
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h1' className={classes.subheading}>Your Fashion Career starts now!</Typography>
        </div>
    );
};

export default Home;