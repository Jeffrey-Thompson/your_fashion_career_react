import React from 'react';
import useCompanies from '../hooks/useCompanies';
import { Box, Typography, Link, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RatingCircle from '../components/RatingCircle/RatingCircle';

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
        color: 'blue',
        fontFamily: 'Montserrat'
    },
    boxes: {
        padding: '10px 10px 0px 20px',
        height: '200px',
        flex: '1 1 300px',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            flex: '1 1 0px'
        }
    },
    circleRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between'
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
    const {overall, logo, name, type, link, location, size, description, workLife, salary, treatment, diversity, sustainability, development, authenticity, management, growth, freedom} = company;
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
                            {overall ?<StyledRating value={overall} readOnly precision={0.1} /> : <Skeleton variant='rect' width={300} height={20} />}
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
            <Box className={classes.circleRow}>
                <RatingCircle rating={workLife} name='Work-Life'></RatingCircle>
                <RatingCircle rating={salary} name='Salary'></RatingCircle>
                <RatingCircle rating={development} name='Career Development'></RatingCircle>
                <RatingCircle rating={treatment} name='Kindness'></RatingCircle>
                <RatingCircle rating={diversity} name='Diversity'></RatingCircle>
                <RatingCircle rating={sustainability} name='Sustainable Practice'></RatingCircle>
                <RatingCircle rating={authenticity} name='Authenticity'></RatingCircle>
                <RatingCircle rating={management} name='Management'></RatingCircle>
                <RatingCircle rating={growth} name='Growth'></RatingCircle>
                <RatingCircle rating={freedom} name='Creative Freedom'></RatingCircle>
            </Box>
        </Box>
    )
}

export default CompanyShow;