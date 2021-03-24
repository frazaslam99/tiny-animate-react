import React from 'react';
import { Typography } from '@material-ui/core';
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 } from '../../images/images';
import styles from './Reviews.css';

const Reviews = () => {
    const avatars = [ avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 ];
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Typography variant="h5" style={{ color: '#ffffff' }}>
                    Reviews
                </Typography>
            </div>

            <div className={styles.reviews}>
                {[0,1,2,3,4,5].map( i => (
                    <div key={i} className={styles.review}>
                        <div className={styles.avatar}>
                            <img src={avatars[i]} alt="" />
                        </div>
                        <div className={styles.reviewBody}>
                            <Typography variant="subtitle1" color="textPrimary">
                                {`Reviewer ${i+1}`}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {`Reviewer ${i+1} Title`}
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, explicabo."
                            </Typography>
                        </div>
                        <div className={styles.button}>
                            <Typography variant="subtitle1" style={{ color: "#ffffff" }}>
                                Show full testimonial
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews
