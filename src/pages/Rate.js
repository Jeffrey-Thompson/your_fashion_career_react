import React from 'react';
import { Typography, Box, TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, Grid, Slider, Tooltip } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
    },
    subheading: {
        fontFamily: 'Druk',
        paddingTop: '5px',
        marginTop: '20px'
    },
    stars: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
    radio: {
        display: 'flex',
        flexDirection: 'row'
    }
}));

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
        valueLabel: {
            left: 'calc(-50% + 12px)',
            top: -22,
            '& *': {
                background: 'transparent',
                color: '#000',
            },
        },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);



const Rate = () => {
    const classes = useStyles();
    
    const [employee, setEmployee] = React.useState('current');

    const handleEmployee = (event) => {
        setEmployee(event.target.value);
    };

    return(
        <Box className={classes.root} >
            <Typography variant='h2' className={classes.subheading}>Rate a Fashion Company</Typography>
            <Typography variant='h6' className={classes.subheading}>Company</Typography>
            <form>
                <TextField id='name' name='name' variant='filled' />
                <Typography variant='h6' className={classes.subheading}>Overall Rating</Typography>
                <div className={classes.stars}>
                    <Rating name='overall' precision={0.5} />
                </div>
                <Typography variant='h6' className={classes.subheading}>Are you a current or former employee?</Typography>
                <FormControl component='fieldset'>
                    <RadioGroup name='employee' value={employee} onChange={handleEmployee} className={classes.radio}>
                        <FormControlLabel value='current' control={<Radio />} label='Current' />
                        <FormControlLabel value='former' control={<Radio />} label='Former' />
                    </RadioGroup>
                </FormControl>
                <Typography variant='h6' className={classes.subheading}>Job Title</Typography>
                <TextField id='title' name='title' variant='filled' />
                <Typography variant='h6' className={classes.subheading}>Categories</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Career development</Typography>
                        <IOSSlider name='development' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Growth opportunities</Typography>
                        <IOSSlider name='growth' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Work-life balance</Typography>
                        <IOSSlider name='workLife' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Diversity of workforce</Typography>
                        <IOSSlider name='diversity' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Salary & benefits</Typography>
                        <IOSSlider name= 'salary' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Authenticity</Typography>
                        <IOSSlider name='authenticity' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Sustainable business practice</Typography>
                        <IOSSlider name='sustainability' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Management</Typography>
                        <IOSSlider name='management' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Kindness</Typography>
                        <IOSSlider name='treatment' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' gutterBottom>Creative Freedom</Typography>
                        <IOSSlider name='freedom' aria-label="ios slider" step={1} marks min={1} max={5} defaultValue={3} marks valueLabelDisplay="on" />
                    </Grid>
                </Grid>
            </form>

        </Box>
    )
}

export default Rate;