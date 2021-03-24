import React from 'react';
import { Typography } from '@material-ui/core';
import { sample0, sample1, sample2, sample3, sample4, sample5, sample6, sample7 } from '../../images/images';
import styles from './Samples.css';

const Samples = () => {
    const sampleImages = [ sample0, sample1, sample2, sample3, sample4, sample5, sample6, sample7 ];
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Typography variant="h5" style={{ color: '#ffffff' }}>
                    Samples
                </Typography>
            </div>

            <div className={styles.subtitle1}>
                <Typography variant="h5" style={{ color: '#ffffff' }}>
                    Useful Ux
                </Typography>
            </div>
            <div className={styles.samples}>
                {[0,1,2].map( i => (
                    <div key={i} className={styles.sample}>
                        <img src={sampleImages[i]} alt="" className={styles.sampleImage} />
                        <div className={styles.sampleText}>
                            <Typography variant="subtitle2" color="textPrimary" style={{ fontWeight: 900 }}>
                                Lorem Ipsum
                            </Typography>
                            <Typography variant="subtitle2" color="textPrimary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam odio, officiis impedit mollitia consequuntur nostrum velit quaerat provident assumenda eligendi voluptate, corporis animi eos fugiat voluptatum. Itaque culpa aspernatur nobis debitis, ratione laudantium facere.
                            </Typography>
                            <Typography variant="subtitle2" color="primary">
                                See more
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.subtitle1}>
                <Typography variant="h5" style={{ color: '#ffffff' }}>
                    Digital Copy
                </Typography>
            </div>
            <div className={styles.digitalCopies}>
                {[3,4,5,6,7].map( i => (
                    <div key={i} className={styles.digitalCopy}>
                        <img src={sampleImages[i]} alt="" className={styles.sampleImage} />
                        <div className={styles.sampleText}>
                            <Typography variant="subtitle2" color="textPrimary" style={{ fontWeight: 900 }}>
                                Lorem Ipsum
                            </Typography>
                            <Typography variant="subtitle2" color="textPrimary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam odio, officiis impedit mollitia consequuntur nostrum velit quaerat provident assumenda eligendi voluptate, corporis animi eos fugiat voluptatum. Itaque culpa aspernatur nobis debitis, ratione laudantium facere.
                            </Typography>
                            <Typography variant="subtitle2" color="primary">
                                See more
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Samples
