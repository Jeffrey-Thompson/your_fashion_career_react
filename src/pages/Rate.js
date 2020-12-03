import React from 'react';
import { Typography, Box, TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, Grid, Slider, Checkbox } from '@material-ui/core';
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
    },
    button: {
        color: 'white',
        background: theme.palette.text.primary,
        borderRadius: '0',
        marginTop: '10px',
        fontFamily: 'Druk',
        fontSize: '24px',
        marginBottom: '20px'
    },
    categories: {
        background: theme.palette.primary.main
    },
    inputs: {
        width: '95%'
    }
}));

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
    root: {
        color: '#C2B7FA',
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

const marks = [
    {
        value: 1,
        label: 'Very Poor'
    },
    {
        value: 2,
        label: 'Poor'
    },
    {
        value: 3,
        label: 'Average'
    },
    {
        value: 4,
        label: 'Good'
    },
    {
        value: 5,
        label: 'Excellent'
    }
]


const Rate = () => {
    const classes = useStyles();
    
    const [employee, setEmployee] = React.useState('current');

    const handleEmployee = (event) => {
        setEmployee(event.target.value);
    };

    return(
        <Box className={classes.root} >
            <Typography variant='h2' className={classes.subheading}>Rate a Fashion Company</Typography>
            <form>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant='h6' className={classes.subheading}>Company</Typography>
                        <TextField id='name' name='name' variant='filled' className={classes.inputs}/>
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
                        <TextField id='title' name='title' variant='filled' className={classes.inputs}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='h6' className={classes.subheading}>Categories</Typography>
                        <Box className={classes.categories}>
                            <Grid container >
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4} >
                                    <Typography variant='subtitle2' gutterBottom>Career development</Typography>
                                    <IOSSlider name='development' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3}  />
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Growth opportunities</Typography>
                                    <IOSSlider name='growth' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Work-life balance</Typography>
                                    <IOSSlider name='workLife' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3}  />
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Diversity of workforce</Typography>
                                    <IOSSlider name='diversity' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3}  />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Salary & benefits</Typography>
                                    <IOSSlider name='salary' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Authenticity</Typography>
                                    <IOSSlider name='authenticity' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Sustainable business practice</Typography>
                                    <IOSSlider name='sustainability' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Management</Typography>
                                    <IOSSlider name='management' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Kindness</Typography>
                                    <IOSSlider name='treatment' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={4}>
                                    <Typography variant='subtitle2' gutterBottom>Creative Freedom</Typography>
                                    <IOSSlider name='freedom' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={3} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' className={classes.subheading}>Review title</Typography>
                        <TextField id='reviewTitle' name='reviewTitle' variant='filled' className={classes.inputs}/>
                        <Typography variant='h6' className={classes.subheading}>General comments</Typography>
                        <TextField id='comments' name='comments' variant='filled' multiline rows={5} className={classes.inputs}/>
                    </Grid>
                <FormControlLabel control={<Checkbox name="agree" required/>} label="I agree to Your Fashion Career's Terms of Use. I certify that this review is a truthful account of my experience with this company." />
                <Button type='submit' variant='contained' className={classes.button}>Submit</Button>
                </Grid>
            </form>
        </Box>
    )
}

export default Rate;