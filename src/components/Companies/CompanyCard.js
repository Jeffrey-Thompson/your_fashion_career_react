import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    layout: {
        display: 'flex',
        flexDirection: 'row'
    },
    media: {
        height: 264,
        width: 264,
    },
    text: {
        color: theme.palette.text.primary
    },
    title: {
        fontFamily: 'Druk',
        paddingRight: '10px'
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

const CompanyCard = (props) => {
    const {name, logo, overall, type, location, size} = props.company;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.layout}>
                <CardMedia className={classes.media} image={logo} title={name} />
                <CardContent className={classes.text}>
                    <Typography variant="h3" component='span' className={classes.title}>{name}</Typography>
                    <StyledRating value={overall} readOnly precision={0.1} />
                    <Typography variant='h6'>{type}</Typography>
                    <Typography variant='subtitle1'>{location}</Typography>
                    <Typography variant='h6' component='span'>Size: </Typography>
                    <Typography variant='subtitle1' component='span'>{size}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CompanyCard;