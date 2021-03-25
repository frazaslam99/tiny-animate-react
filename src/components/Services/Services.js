import React from 'react';
import { Typography } from '@material-ui/core';
import useWebAnimations, { tada, swing, heartBeat,fadeInRightBig } from '@wellyshen/use-web-animations';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { service1, service2, service3 } from '../../images/images';
import './Services.css';


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

const Services = () => {

    const classes = useStyles();
    const { ref: service1Ref } = useWebAnimations({
        ...tada,
        autoPlay: false,
        timing: {
            ...tada['timing'],
            id: 'service1',
            iterations: 1,
            duration: 1500,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 4000),
    });
    const { ref: service2Ref } = useWebAnimations({
        ...swing,
        autoPlay: false,
        timing: {
            ...swing['timing'],
            id: 'service2',
            iterations: 1,
            duration: 1500,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 5000),
    });
    const { ref: service3Ref } = useWebAnimations({
        ...heartBeat,
        autoPlay: false,
        timing: {
            ...heartBeat['timing'],
            id: 'service3',
            iterations: 1,
            duration: 1500,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 5000),
    });
    const { ref: para1 } = useWebAnimations({
        ...fadeInRightBig,

        timing: {
            ...fadeInRightBig['timing'],
            iterations: 1,
            duration: 1000,
        },
       
    });
    const { ref: para2} = useWebAnimations({
        ...fadeInRightBig,

        timing: {
            ...fadeInRightBig['timing'],
            iterations: 1,
            duration: 1000,
        },
       
    });
    const { ref: para3 } = useWebAnimations({
        ...fadeInRightBig,

        timing: {
            ...fadeInRightBig['timing'],
            iterations: 1,
            duration: 1000,
        },
       
    });
    return (



        <div style={{ marginTop: "10px" }}>

            <div className={classes.root}>
                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", backgroundColor: "#bea3be" }}>
                    <Grid item xs={12} >
                        <center>
                            <h2 style={{ fontSize: "40px" }}>Services</h2>

                        </center>
                        <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", paddingTop: "50px" }} >
                            <Grid item xs={12} md={12} lg={6}>
                                <center>
                                    <div ref={service1Ref}>
                                        <img src={service1} width="450px" alt="" />
                                    </div>

                                </center>

                            </Grid>
                            <Grid item xs={12}  md={12} lg={6}>
                                <center>
                                    <Typography variant="h3" style={{ color: "#ffffff" }}>Hypertext Markup Language</Typography>
                                    <Typography variant="subtitle1" style={{ color: '#ffffff', paddingTop: "35px", fontSize: "20px" }} ref={para1}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis quam assumenda! Fugit, voluptate. Exercitationem officiis voluptates temporibus dicta vero quasi et, corporis laudantium consectetur numquam rerum esse odio est dignissimos aspernatur. Illum ea dignissimos sunt. Dolores dolore eos in fugiat esse, repudiandae rerum possimus aliquid, perspiciatis voluptatibus numquam earum! Distinctio nihil doloribus, illum odit quibusdam fuga aut? Id unde enim repudiandae hic. Soluta saepe sequi tempora amet quis provident. Nostrum repellendus ea ab natus omnis cumque, adipisci nam accusamus!
                </Typography>
                                </center>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>




                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", backgroundColor: "#bea3be" }}>
                    <Grid item xs={12} >
                        <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", paddingTop: "50px" }} >
                            <Grid item xs={12} md={6}>
                                <center>
                                    <div ref={service2Ref}>
                                        <img src={service2} width="480px" height="400px" alt="" />
                                    </div>
                                </center>

                            </Grid>
                            <Grid item xs={12}  md={12} lg={6}>
                                <center>

                                    <Typography variant="h3" style={{ color: "#ffffff" }}>Cascading Style Sheets</Typography>

                                    <Typography variant="subtitle1" style={{ color: '#ffffff', paddingTop: "35px", fontSize: "20px" }} ref={para2}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis quam assumenda! Fugit, voluptate. Exercitationem officiis voluptates temporibus dicta vero quasi et, corporis laudantium consectetur numquam rerum esse odio est dignissimos aspernatur. Illum ea dignissimos sunt. Dolores dolore eos in fugiat esse, repudiandae rerum possimus aliquid, perspiciatis voluptatibus numquam earum! Distinctio nihil doloribus, illum odit quibusdam fuga aut? Id unde enim repudiandae hic. Soluta saepe sequi tempora amet quis provident. Nostrum repellendus ea ab natus omnis cumque, adipisci nam accusamus!
                </Typography>
                                </center>


                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", backgroundColor: "#bea3be" }}>
                    <Grid item xs={12} >
                        <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0", paddingTop: "50px", paddingBottom: "50px" }} >
                            <Grid item xs={12} md={12} lg={6}>
                                <center>

                                    <div ref={service3Ref}>
                                        <img src={service3} width="480px" height="380px" alt="" />
                                    </div>
                                </center>

                            </Grid>
                            <Grid item xs={12}  md={12} lg={6}>
                                <center>

                                    <Typography variant="h3" style={{ color: "#ffffff" }}>JavaScript</Typography>

                                    <Typography variant="subtitle1" style={{ color: '#ffffff', paddingTop: "35px", fontSize: "20px" }} ref={para3}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis quam assumenda! Fugit, voluptate. Exercitationem officiis voluptates temporibus dicta vero quasi et, corporis laudantium consectetur numquam rerum esse odio est dignissimos aspernatur. Illum ea dignissimos sunt. Dolores dolore eos in fugiat esse, repudiandae rerum possimus aliquid, perspiciatis voluptatibus numquam earum! Distinctio nihil doloribus, illum odit quibusdam fuga aut? Id unde enim repudiandae hic. Soluta saepe sequi tempora amet quis provident. Nostrum repellendus ea ab natus omnis cumque, adipisci nam accusamus!
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

export default Services
