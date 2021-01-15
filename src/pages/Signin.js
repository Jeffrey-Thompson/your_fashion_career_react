import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AuthModel from '../models/AuthModel';
import UserModel from "../models/UserModel";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { useSetRecoilState } from "recoil";


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
    const [user, setUser] = useRecoilState(userState);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    AuthModel.login({email, password}).then(response=>{
        console.log(response)
        if (response.status === 200) {
            localStorage.setItem("uid", response.signedJwt)
            UserModel.show().then((response) => {
                console.log(response);
                setUser(response.user);
                props.history.push("/companies")
              });
        } 
        else {
            props.history.push("/*")
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
                    <form onSubmit={handleSubmit}>
                        <TextField className={classes.form} id='email' label='Email' variant='standard' onChange={(e) => setEmail(e.target.value)} value={email} name='email'/>
                        <TextField type='password' className={classes.form} id='password' label='Password' variant='standard' onChange={(e) => setPassword(e.target.value)} value={password} name='password'/>
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