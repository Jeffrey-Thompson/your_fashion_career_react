import React from "react";
import Companies from "../components/Companies/Companies";
import useCompanies from "../hooks/useCompanies";
import Skeleton from '@material-ui/lab/Skeleton';
import Box  from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'

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
    }
}));

const AllCompanies = (props) => {
    const [companies, fetchCompanies] = useCompanies();
    const classes = useStyles();

    return (
        <>
            <h1>All Companies Page</h1>
            {companies.length ? <Companies data={companies} /> : 
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