import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
    },
    subheading: {
        fontFamily: 'Druk',
        paddingTop: '5px',
        marginTop: '20px'
    }
}));


const Rate = () => {
    const classes = useStyles();
    
    return(
        <Box className={classes.root}>
            <Typography variant='h6' className={classes.subheading}>Rate a Fashion Company</Typography>
        </Box>
    )
}

export default Rate;