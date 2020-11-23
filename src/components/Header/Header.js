import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary,
        color: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'DrukTextWide'
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} borderTop={5} borderColor='secondary.main'>
            <AppBar position='sticky' >
                <Toolbar >
                    <Typography variant='h6' className= {classes.title}>
                        YOUR FASHION CAREER
                    </Typography>
                    <Button color='inherit'>
                        <NavLink to={'/sign_in'}>
                            Sign In
                        </NavLink>
                    </Button>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;