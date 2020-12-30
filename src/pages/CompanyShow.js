import React from 'react';
import useCompanies from '../hooks/useCompanies';
import { Box, Typography, Link, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary
    },
    banner: {
        width: '100%',
        height: '400px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto'
        }
    },
    grey: {
        background: theme.palette.primary.main,
        position: 'absolute',
        bottom: '0px',
        height: '200px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            height: 'auto'
        }
    },
    logo: {
        width: '264px',
        height: '264px',
        position: 'absolute',
        left: '30px',
        bottom: '30px',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
        }
    },
    info: {
        position: 'absolute',
        bottom: '0px',
        left: '300px',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            flexDirection: 'column'
        }
    },
    title: {
        fontFamily: 'Druk',
        marginRight: '10px'
    },
    button: {
        fontFamily: 'Druk',
        marginRight: '30px'
    },
    link: {
        color: 'blue'
    },
    boxes: {
        padding: '10px 10px 30px 20px'
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
    const {overall, logo, name, type, link, location, size, description} = company;
    const leaveReview = `/rate/${props.match.params.id}`
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box id='banner' className={classes.banner}>
                <Box className={classes.grey}>
                    <img src={logo} alt={name} className={classes.logo} />
                    <Box className={classes.info}>
                        <Box className={classes.boxes}>
                            <Typography variant='h3' component='span' className={classes.title}>{name}</Typography>
                            <StyledRating value={overall} readOnly precision={0.1} />
                            <Typography variant='subtitle1'>{type}</Typography>
                            <Link href={link} target='_blank' rel='noopener' className={classes.link}>{link}</Link>
                            <Typography variant='body2'>{location}</Typography>
                            <Typography variant='subtitle1' component='span'>Size: </Typography>
                            <Typography variant='body2' component='span'>{size}</Typography>
                        </Box>
                        <Box className={classes.boxes}>
                            <Button href={leaveReview} className={classes.button}><AddIcon className={classes.title}></AddIcon>Leave a review</Button>
                            <Button className={classes.button}><FavoriteBorderIcon className={classes.title}></FavoriteBorderIcon>Save</Button>
                            <Typography variant='body2'>{description}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography variant='h4' className={classes.title}>Cheat Sheet</Typography>
        </Box>
    )
}

export default CompanyShow;