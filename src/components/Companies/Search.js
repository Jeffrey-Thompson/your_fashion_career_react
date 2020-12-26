import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
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
                style={{ width: 300}}
                renderInput={(params) => <TextField {...params} label='Company Name' variant='outlined' name='name' onSelect={props.handleSearchChange}  />}
            />
            <Autocomplete 
                id='type'
                options={props.types}
                getOptionLabel={(option) => option.type}
                style={{ width: 300}}
                renderInput={(params) => <TextField {...params} label='Category' variant='outlined' name='type' />}
            />
            <Autocomplete 
                id='location'
                options={props.locations}
                getOptionLabel={(option) => option.location}
                style={{ width: 300}}
                renderInput={(params) => <TextField {...params} label='Location' variant='outlined' name='location' />}
            />
            <Button variant='contained'>Search</Button>
        </Box>
    )
}

export default Search;