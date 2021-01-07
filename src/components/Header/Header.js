import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import TemporaryDrawer from '../Sidebar/Sidebar'
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.primary
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Druk',
        color: theme.palette.text.primary
    },
    links: {
        color: theme.palette.text.primary
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
}));

const Header = () => {
    const classes = useStyles();
    const [user, setUser] = useRecoilState(userState);
    return (
        <Box className={classes.root} borderTop={5} borderColor='secondary.main'>
            <AppBar position='sticky' elevation={0}>
                <Toolbar >
                    <Typography variant='h6' className= {classes.title}>
                        YOUR FASHION CAREER
                    </Typography>
                    <Button color='inherit'>
                        <Link href='/signin' className={classes.links}>
                            Sign In
                        </Link>
                    </Button>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <TemporaryDrawer/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;