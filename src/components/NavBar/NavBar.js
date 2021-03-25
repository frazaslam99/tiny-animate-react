import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
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


                                <div className="menu">
                                    <div className="menuname">
                                        <Link to="/" style={{ color: "white" }}><span>Home</span></Link>
                                        <Link to="/about" style={{ color: "white" }}><span>About Us</span></Link>
                                        <Link to="/service" style={{ color: "white" }}><span>Services</span></Link>
                                        <Link to="/blogs" style={{ color: "white" }}><span>Blogs</span></Link>

                                    </div>
                                    <span className="menuBtn" onClick={() => {
                                        return <>
                                            <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0" }}>
                                                <Grid item xs={12} >
                                                <h3>Home</h3>
                                                
                                            </Grid>
                                        </Grid>
                                   </>

                               }}><FaBars /></span>

                                </div>




                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
        </div>
        </div>




    )
}


export default NavBar