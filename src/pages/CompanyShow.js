import React from 'react';
import useCompanies from '../hooks/useCompanies';
import { Box, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary
    },
    banner: {
        width: '100%',
        height: '400px',
        position: 'relative'
    },
    grey: {
        background: theme.palette.primary.main,
        position: 'absolute',
        bottom: '0px',
        height: '200px',
        width: '100%',
    },
    logo: {
        width: '264px',
        height: '264px',
        position: 'absolute',
        left: '30px',
        bottom: '30px',
    },
    info: {
        position: 'absolute',
        bottom: '0px',
        left: '300px',
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Druk'
    }
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#404041'
    },
    iconHover: {
        color: '#404041'
    },
})(Rating);

const CompanyShow = (props) => {
    const [company] = useCompanies(props.match.params.id);
    const {overall, logo, name} = company;
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box id='banner' className={classes.banner}>
                <Box className={classes.grey}>
                    <img src={logo} alt={name} className={classes.logo} />
                    <Box className={classes.info}>
                        <Box>
                            <Typography variant='h3' component='span' className={classes.title}>{name}</Typography>
                            <StyledRating value={overall} readOnly precision={0.1} />
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography variant='h4' className={classes.title}>Cheat Sheet</Typography>
        </Box>
    )
}

export default CompanyShow;