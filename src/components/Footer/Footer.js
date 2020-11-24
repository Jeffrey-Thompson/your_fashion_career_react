import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid  from '@material-ui/core/Grid';

import './Footer.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary,
        top: 'auto',
        bottom: 0,
        color: theme.palette.text.primary,
        alignItems: 'center',
        textAlign: 'center' 
    },
    title: {
        fontFamily: 'Druk',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' elevation={0} className={classes.root}>
            <Toolbar>
                <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant='h6'>Your Fashion Career</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul className='link_list'>
                        <li>
                            <Typography variant='p'>Privacy</Typography>
                        </li>
                        <li>
                            <Typography variant='p'>Terms</Typography>
                        </li>
                        <li>
                            <Typography variant='p'>Contact</Typography>
                        </li>
                        <li>
                            <Typography variant='p'>About</Typography>
                        </li>
                    </ul>
                </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;