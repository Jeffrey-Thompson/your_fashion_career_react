import React from 'react';
import clsx from 'clsx';
import { Typography, Card, CardContent, Box, Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Stars from '../Stars/Stars';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
        marginBottom: '20px',
        background: theme.palette.primary.main
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        float: 'right',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    titleBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        flexWrap: 'wrap'
    },
}));

function RatingCard(props) {
    const classes = useStyles();
    const { reviewTitle, text, overall } = props.review;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Box className={classes.titleBar}>
                    <Typography variant='h4' component='span'>{reviewTitle}</Typography>
                    <Stars overall={overall} />
                </Box>
                {text.length < 500 ?
                    <Typography variant='body1' component='p'>{text}</Typography> : 
                    <Box >
                        <Collapse in={!expanded} >
                            <Typography variant='body1' component='p' >{text.slice(0, 500)}...</Typography>
                        </Collapse>
                        <IconButton className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'>
                            {!expanded ? <Typography variant='button'>Read More</Typography>: ''}
                            <ExpandMoreIcon />
                        </IconButton>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            <Typography variant='body1' component='p' >{text}</Typography>
                        </Collapse>
                    </Box>}
            </CardContent>
        </Card>
    )
}
    
    

export default RatingCard;