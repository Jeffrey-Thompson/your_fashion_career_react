import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    inputs: {
        flex: '1 1 300px',
        [theme.breakpoints.down('sm')]: {
            flex: '1 1 0px',
        }
    },
    button: {
        background: theme.palette.text.primary,
        fontFamily: 'Druk',
        color: 'white',
        flex: '0 1 200px',
        [theme.breakpoints.down('sm')]: {
            flex: '1 1 0px',
        }
    }
}));

const Search = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Autocomplete 
                id='name'
                options={props.companies}
                getOptionLabel={(option) => option.name}
                className={classes.inputs}
                renderInput={(params) => <TextField {...params} label='Company Name' variant='outlined' name='name' onSelect={props.handleNameChange}  />}
            />
            <Autocomplete 
                id='type'
                options={props.types}
                getOptionLabel={(option) => option.type}
                className={classes.inputs}
                renderInput={(params) => <TextField {...params} label='Category' variant='outlined' name='type' onSelect={props.handleTypeChange}/>}
            />
            <Autocomplete 
                id='location'
                options={props.locations}
                getOptionLabel={(option) => option.location}
                className={classes.inputs}
                renderInput={(params) => <TextField {...params} label='Location' variant='outlined' name='location' onSelect={props.handleLocationChange} />}
            />
            <Button variant='contained' disableElevation className={classes.button}>Search</Button>
        </Box>
    )
}

export default Search;