import React from 'react'
import { Typography } from '@material-ui/core';
import useWebAnimations, { fadeInLeft,zoomIn} from '@wellyshen/use-web-animations';
import { avatar } from '../../images/images';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './About.css';


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

export default function About() {
    const classes = useStyles();
    const { ref: imag } = useWebAnimations({
        ...fadeInLeft
    });
    const { ref: para } = useWebAnimations({
        ...zoomIn,
        autoPlay: true,
        timing: {
            ...zoomIn['timing'],
            id: 'service1',
            iterations: 1,
            duration: 1500,
        },
        // onReady: ({ animation }) => setInterval(() => animation.play(), 4000),
    });
    return (
        <div style={{ marginTop: "10px" }}>

            <div className={classes.root}>
                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", backgroundColor: "purple" }}>
                    <Grid item xs={12} >
                    <center>
                        <h2 style={{ fontSize: "40px", paddingTop: "20px"  }}>About Us</h2>

                    </center>
                        <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", paddingTop: "70px",paddingBottom:"70px" }} >
                            <Grid item xs={12} md={6}>
                                <img src={avatar} alt="" className="avatar" ref={imag} />

                            </Grid>
                            <Grid item xs={12} md={6}>
                            <center>
                                <Typography variant="subtitle1" style={{ fontSize: "25px", fontWeight: 200 }} ref={para} className="aboutPara">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur modi <br />
                                    voluptates dolores facere, molestiae, provident, libero numquam assumenda eos  <br />
                                    tempore rerum at voluptatem minima?
                </Typography>
                </center>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>


        </div>
    )
}
