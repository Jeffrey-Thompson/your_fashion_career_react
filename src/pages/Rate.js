import React from 'react';
import { Typography, Box, TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

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
            </form>

        </Box>
    )
}

export default Rate;