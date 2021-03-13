import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid  from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Facebook, Instagram, Twitter, Headset } from '@material-ui/icons';

import './Footer.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary,
        top: 'auto',
        bottom: 0,
        color: theme.palette.text.primary,
        alignItems: 'center',
        textAlign: 'center',
        justify: 'center' 
    },
    title: {
        fontFamily: 'Druk',
    },
    links: {
        color: theme.palette.text.primary
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' elevation={0} className={classes.root}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography className={classes.title} variant='h6'>Fashion Job Rater</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <ul className='link_list'>
                                <li>
                                    <Link href='#' className={classes.links}>
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={classes.links}>
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={classes.links}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={classes.links}>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} >
                            <Container style={{width: '20vw'}}>
                                <ul className='link_list'>
                                    <li>
                                        <Facebook />
                                    </li>
                                    <li>
                                        <Instagram />
                                    </li>
                                    <li>
                                        <Twitter />
                                    </li>
                                    <li>
                                        <Headset />
                                    </li>
                                </ul>
                            </Container>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}

export default Footer;