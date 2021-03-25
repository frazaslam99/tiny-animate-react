import React from 'react';
import { blog1, blog2, blog3 } from '../../images/images';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useWebAnimations, { backInLeft, backInDown, backInRight } from '@wellyshen/use-web-animations';
import "./Blogs.css"

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
const CaseStudies = () => {
    const classes = useStyles();
    const { ref: pic1 } = useWebAnimations({
        ...backInLeft,
        autoPlay: true,
        timing: {
            ...backInLeft['timing'],
            id: '1',
            iterations: 1,
            duration: 2000

        },

    });
    const { ref: pic2 } = useWebAnimations({
        ...backInDown,
        autoPlay: true,
        timing: {
            ...backInDown['timing'],
            id: '2',
            iterations: 1,
            duration: 2000

        },

    });
    const { ref: pic3 } = useWebAnimations({
        ...backInRight,
        autoPlay: true,
        timing: {
            ...backInRight['timing'],
            id: '3',
            iterations: 1,
            duration: 2000

        },

    });
    return (
        <div style={{ marginTop: "10px" }}>

            <div className={classes.root}>
                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", backgroundColor: "#dddfcb" }}>
                    <Grid item xs={12} >
                        <center>
                            <h2 style={{ fontSize: "40px" }}>Blog</h2>

                        </center>
                        <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", paddingTop: "70px", paddingBottom: "70px" }} >
                            <Grid item xs={12} md={12} lg={4}>
                                <center>

                                    <img src={blog1} width="420px" className="image" alt="" ref={pic1} />
                                </center>

                            </Grid>
                            <Grid item xs={12} md={12} lg={4}>
                                <center>

                                    <img src={blog2} width="420px" className="image" alt="" ref={pic2} />
                            </center>
                            </Grid>

                            <Grid item xs={12} md={12} lg={4}>
                                <center>

                                    <img src={blog3} width="420px" className="image" alt="" ref={pic3} />
                                </center>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>


        </div>

    )
}

export default CaseStudies
