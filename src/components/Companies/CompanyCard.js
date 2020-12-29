import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        margin: '4px',
        background: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    layout: {
        display: 'flex',
        flexDirection: 'row',
    },
    media: {
        height: 264,
        width: 264,
    },
    text: {
        color: theme.palette.text.primary,
        flexGrow: '3'
    },
    title: {
        fontFamily: 'Druk',
        paddingRight: '10px'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '0 0 200px'
    },
    buttonText: {
        fontFamily: 'Druk',
        borderRadius: '0px',
        borderWidth: '2px',
        borderColor: theme.palette.text.primary,
        width: '150px'
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
    const {name, logo, overall, type, location, size, _id} = props.company;
    const rateLink = `/rate/${_id}`;
    const companyLink = `/companies/${_id}`;
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea className={classes.layout} href={companyLink}>
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
            <CardActions className={classes.buttons}>
                <Button size='large' className={classes.buttonText} href={rateLink}><AddIcon className={classes.title}></AddIcon>Leave a Review</Button>
                <Button size='large' variant='outlined' className={classes.buttonText} href={companyLink}>Read Reviews</Button>
            </CardActions>
        </Card>
    )
}

export default CompanyCard;