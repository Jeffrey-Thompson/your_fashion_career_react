import React from "react";
import { useState } from 'react';
import Companies from "../components/Companies/Companies";
import Search from "../components/Companies/Search";
import useCompanies from "../hooks/useCompanies";
import Skeleton from '@material-ui/lab/Skeleton';
import Box  from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        flexGrow: '3',
        alignItems: 'center',
        margin: '2px',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingLeft: '10px'
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '0 0 200px',
        alignItems: 'center',
        margin: '10px'
    },
    spacing: {
        marginBottom: '10px'
    },
    title: {
        fontFamily: 'Druk'
    },
    refresh: {
        float: 'right',
        marginTop: '20px'
    }
}));

const AllCompanies = (props) => {
    const [companies] = useCompanies();
    const classes = useStyles();
    const [filter, setFilter] = useState('');
    const types = function(companies) {
        const filtered = [];
        for(let i=0; i<companies.length; i++) {
            let checked = false;

            for(let j=0; j<filtered.length; j++) {
                if (companies[i].type === filtered[j].type) {
                    checked = true;
                }
            }

            if (!checked) {
                filtered.push(companies[i]);
            }
        }
        
        return filtered;
    };
    const filteredTypes = types(companies);
    const locations = function(companies) {
        const filtered = [];
        for(let i=0; i<companies.length; i++) {
            let checked = false;

            for(let j=0; j<filtered.length; j++) {
                if (companies[i].location === filtered[j].location) {
                    checked = true;
                }
            }

            if (!checked) {
                filtered.push(companies[i]);
            }
        }
        
        return filtered;
    };
    const filteredLocations = locations(companies);

    const handleSearchChange = (event) => {
        console.log(event.target.value);
        setFilter(event.target.value);
    }

    return (
        <>
            <Typography variant='h2' component='span' className={classes.title}>Search Companies</Typography>
            <Button href='/companies/' className={classes.refresh} variant='outlined'>Show all companies</Button>
            {companies.length ? <Search companies={companies} types={filteredTypes} locations={filteredLocations} handleSearchChange={handleSearchChange} /> : <Skeleton variant='rect' width={700} height={20} />}
            {companies.length ? <Companies data={companies} filter={filter} /> : 
            <>
                <Card className={classes.root}>
                    <Skeleton variant='rect' width={264} height={264} />
                    <Box className={classes.text}>
                        <Skeleton variant='text' className={classes.spacing}/>
                        <Skeleton variant='text' className={classes.spacing}/>
                        <Skeleton variant='text' className={classes.spacing}/>
                        <Skeleton variant='text' />
                    </Box>
                    <Box className={classes.button}>
                        <Skeleton variant='rect' width={150} height={40} className={classes.spacing} />
                        <Skeleton variant='rect' width={150} height={40} />
                    </Box>
                </Card>
            </>
            } 
        </>
    )
}

export default AllCompanies;