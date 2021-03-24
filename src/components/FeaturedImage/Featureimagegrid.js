import React from 'react';
import useWebAnimations, { bounce,backInDown} from '@wellyshen/use-web-animations';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IntroFeatured, IntroFrontLayer, IntroBrain } from '../../images/images';
import './FeaturedImage.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

export default function FeaturedImage() {
    const classes = useStyles();
    const { ref: brainRef } = useWebAnimations({
        id: "brain",
        keyframes: { transform: ["translateY(20px)", "translateY(-20px)"] },
        timing: { duration: 2500, iterations: Infinity, direction: 'alternate', easing: "ease-in-out", },
    });
    const { ref: layerRef } = useWebAnimations({
        id: 'layer',
        keyframes: { opacity: [0, 1, 1,] },
        timing: { duration: 1000, iterations: Infinity, direction: 'alternate', easing: 'steps(3, end)' },
    });
  

    const { ref: headi } = useWebAnimations({
        ...backInDown,
        autoPlay: false,
    keyframes: { color: ['#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#0079FF'] },

        timing: {
            ...backInDown['timing'],
            id: 'service1',
            iterations: 1,
            duration: 2500,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 4000),
    });
    const { ref: button } = useWebAnimations({
        ...bounce
    });
    return (


        <div className={classes.root}>

            <div style={{ paddingTop: "10px" }}>
                <Grid container spacing={3} style={{ display: "flex", justifyContent: "center", width: "100%", margin: "0" }}>
                    <Grid item xs={12}   >
                        <Grid container spacing={3} style={{ backgroundColor: "black"}}>
                            <Grid item xs={12} md={6}>
                                <div>

                                    <Typography variant="h1" style={{ color: '#ffffff' }} className="heading1">
                                        <span ref={headi}>ANIMATION</span>
                                   
                                    </Typography>
                                    <Typography variant="h2" style={{ color: '#ffffff' }}  className="heading2">TINY SITE</Typography>
                                    <Typography variant="h5" style={{ color: '#ffffff' }} className="heading">
                                        Enhance your communications with psychology- <br />
                                        based copywriting and UX writing
                </Typography>
                                    <button className="chatBtn" ref={button}>
                                        <Typography variant="subtitle1">Send a message</Typography>
                                    </button>
                                </div>
                            </Grid>
                            <Grid itemxs={12} md={6}>
                                <div className="rightContainer">
                                    <img src={IntroFeatured} alt="" className="featuredImage" />
                                    <img src={IntroFrontLayer} alt="" className="frontLayer" ref={layerRef} />
                                    <img src={IntroBrain} alt="" className="introBrain" ref={brainRef} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>

        </div>
    );
}
