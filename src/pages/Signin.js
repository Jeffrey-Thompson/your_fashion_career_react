import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AuthModel from '../models/AuthModel';

const useStyles = makeStyles((theme) => ({
    root: {
        borderColor: theme.palette.text.primary,
        textAlign: 'center',
        background: theme.palette.primary.main,
    },
    subheading: {
        fontFamily: 'Druk',
        color: theme.palette.text.primary,
        paddingTop: '5px',
        marginTop: '20px'
    },
    form: {
        width: '80ch',
        marginTop: '10px',
        border: `3px solid ${theme.palette.text.primary}`,
        background: 'white',
    },
    button: {
        color: 'white',
        background: theme.palette.text.primary,
        borderRadius: '0',
        marginTop: '10px',
        fontFamily: 'Druk',
        fontSize: '24px',
        marginBottom: '20px'
    }
}));

const Signin = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Thing hit")

    AuthModel.register({email, password}).then(response=>{
      console.log(response)
      if (response.status === 201) {
        props.history.push("/dashboard")
      } 
    })
  }
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Grid item style={{height: '20vh'}}></Grid>
            <Grid item xs={7} >
                <Box className={classes.root} border={2} >
                    <Typography variant='h3' className={classes.subheading}>Sign In</Typography>
                    <Typography variant='h6'>Welcome Back!</Typography>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField className={classes.form} id='email' label='Email' variant='standard' onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <TextField type='password' className={classes.form} id='password' label='Password' variant='standard' onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <br></br>
                        <Button type='submit' variant='contained' className={classes.button} >Sign In</Button>
                    </form>
                </Box>
            </Grid>
            <Grid item style={{height: '20vh'}}></Grid>
        </Grid>
    );
};

export default Signin;