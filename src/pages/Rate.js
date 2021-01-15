import React from 'react';
import { useState } from 'react';
import { Typography, Box, TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, Grid, Slider, Checkbox } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import useCompanies from '../hooks/useCompanies';
import RatingModel from '../models/RatingModel';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
    },
    subheading: {
        fontFamily: 'Druk',
        paddingTop: '5px',
        marginTop: '20px',
        fontSize: '48px'
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
        borderRadius: '0',
        marginTop: '10px',
        fontFamily: 'Druk',
        fontSize: '24px',
        marginBottom: '20px'
    },
    categories: {
        background: theme.palette.primary.main,
    },
    inputs: {
        width: '100%'
    },
    spacing: {
        marginTop: '64px'
    },
    banner: {
        width: '100%',
        height: '400px'
    },
    logo: {
        marginLeft: '50px',
        marginTop: '50px'
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
        value: 2
    },
    {
        value: 3,
        label: 'Average'
    },
    {
        value: 4
    },
    {
        value: 5,
        label: 'Excellent'
    }
]

const initialValues = {
    employee: 'current',
    development: 3,
    workLife: 3,
    salary: 3,
    sustainability: 3,
    treatment: 3,
    authenticity: 3,
    diversity: 3,
    freedom: 3,
    growth: 3,
    management: 3,
    title: '',
    reviewTitle: '',
    text: ''
}


const Rate = (props) => {
    const classes = useStyles();
    
    const [values, setValues] = useState(initialValues);
    const [company] = useCompanies(props.match.params.id);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleDevelopment = (e, value) => {
        setValues({
            ...values,
            development: value    
        })
    }

    const handleWorkLife = (e, value) => {
        setValues({
            ...values,
            workLife: value    
        })
    }

    const handleGrowth = (e, value) => {
        setValues({
            ...values,
            growth: value    
        })
    }

    const handleDiversity = (e, value) => {
        setValues({
            ...values,
            diversity: value    
        })
    }

    const handleSalary = (e, value) => {
        setValues({
            ...values,
            salary: value    
        })
    }

    const handleAuthenticity = (e, value) => {
        setValues({
            ...values,
            authenticity: value    
        })
    }

    const handleSustainablity = (e, value) => {
        setValues({
            ...values,
            sustainability: value    
        })
    }

    const handleManagement = (e, value) => {
        setValues({
            ...values,
            management: value    
        })
    }

    const handleTreatment = (e, value) => {
        setValues({
            ...values,
            treatment: value    
        })
    }

    const handleFreedom = (e, value) => {
        setValues({
            ...values,
            freedom: value    
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const overall = ((values.development+values.workLife+values.salary+values.sustainability+values.treatment+values.authenticity+values.diversity+values.freedom+values.management+values.growth)*5)/50

        const review = {
            ...values,
            company: props.match.params.id,
            overall: overall
        }

        RatingModel.create(props.match.params.id, review).then(
            (data) => {
                props.history.push(`/companies/${props.match.params.id}`);
            }
        );
    }

    return(
        <Box className={classes.root} >
            <Box className={classes.banner} id='banner'>
                <img src={company.logo} alt={company.name} className={classes.logo}></img>
            </Box>
            <Typography variant='h2' className={classes.subheading}>Review {company.name}</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box className={classes.categories} >
                            <Grid container id='categories'>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Career development</Typography>
                                    <IOSSlider id='development' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.development} onChange={handleDevelopment} />
                                </Grid>
                                <Grid item sm={2} ></Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Growth opportunities</Typography>
                                    <IOSSlider name='growth' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.growth} onChange={handleGrowth}/>
                                </Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Work-life balance</Typography>
                                    <IOSSlider name='workLife' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.workLife} onChange={handleWorkLife}/>
                                </Grid>
                                <Grid item sm={2} ></Grid>
                                
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Diversity of workforce</Typography>
                                    <IOSSlider name='diversity' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.diversity} onChange={handleDiversity}/>
                                </Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Salary & benefits</Typography>
                                    <IOSSlider name='salary' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.salary} onChange={handleSalary}/>
                                </Grid>
                                <Grid item sm={2} ></Grid>
                                
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Authenticity</Typography>
                                    <IOSSlider name='authenticity' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.authenticity} onChange={handleAuthenticity}/>
                                </Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={4} xs={12} >
                                    <Typography variant='h6' gutterBottom>Sustainable business practice</Typography>
                                    <IOSSlider name='sustainability' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.sustainability} onChange={handleSustainablity}/>
                                </Grid>
                                <Grid item sm={2} ></Grid>
                                
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Management</Typography>
                                    <IOSSlider name='management' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.management} onChange={handleManagement}/>
                                </Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={1}></Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography variant='h6' gutterBottom>Kindness</Typography>
                                    <IOSSlider name='treatment' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.treatment} onChange={handleTreatment}/>
                                </Grid>
                                <Grid item sm={2}></Grid>
                                
                                <Grid item sm={4} xs={12} >
                                    <Typography variant='h6' gutterBottom>Creative Freedom</Typography>
                                    <IOSSlider name='freedom' aria-label="ios slider" step={1} marks={marks} min={1} max={5} defaultValue={values.freedom} onChange={handleFreedom}/>
                                </Grid>
                                <Grid item sm={1}></Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} container>
                        <Grid item sm={4} xs={6}>
                            <Typography variant='h6' className={classes.subheading}>Review title</Typography>
                            <TextField id='reviewTitle' name='reviewTitle' variant='outlined' className={classes.inputs} value={values.reviewTitle} required onChange={handleInputChange}/>
                        </Grid>
                        <Grid item sm={1}></Grid>
                        <Grid item sm={4} xs={6}>
                            <Typography variant='h6' className={classes.subheading}>Job title</Typography>
                            <TextField id='title' name='title' variant='outlined' className={classes.inputs} value={values.title} required onChange={handleInputChange}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' className={classes.subheading}>General comments</Typography>
                        <TextField id='comments' name='text' variant='outlined' multiline required rows={5} className={classes.inputs} value={values.text} onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' className={classes.subheading}>Are you a current or former employee?</Typography>
                        <FormControl component='fieldset'>
                            <RadioGroup name='employee' value={values.employee} onChange={handleInputChange} className={classes.radio}>
                                <FormControlLabel value='current' control={<Radio />} label='Current' />
                                <FormControlLabel value='former' control={<Radio />} label='Former' />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                <FormControlLabel className={classes.spacing} control={<Checkbox name="agree" required/>} label="I agree to Your Fashion Career's Terms of Use. I certify that this review is a truthful account of my experience with this company." />
                </Grid>
                <Box justifyContent='center' display='flex'>
                    <Button type='submit' variant='outlined' disableElevation className={classes.button}>Submit</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Rate;