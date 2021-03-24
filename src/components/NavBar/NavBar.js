import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const NavBar = () => {

    const classes = useStyles();

    return (

        <div className={classes.root} >
            <div className="navbar">
                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0" }}>
                    <Grid item xs={12} >
                        <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0" }}>
                            <Grid item xs={6}>
                                <h4 style={{ color: "white" }}>My Website</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <span className="menuBtn"><FaBars /></span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>




    )
}


export default NavBar