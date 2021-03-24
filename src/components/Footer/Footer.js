import React from 'react';
import { Typography } from '@material-ui/core';
import { IconContext } from 'react-icons';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { waving1, waving2, waving3, waving4, waving5 } from '../../images/images';
import styles from './Footer.css';

const Footer = () => {
    const wavingAvatars = [ waving1, waving2, waving3, waving4, waving5 ];
    return (
        <div className={styles.container}>
            <Typography variant="h5" style={{ color: '#ffffff' }}>
                Based in Sydney, Australia. Available worldwide.
            </Typography>
            <div className={styles.avatars}>
                {[0,1,2,3,4].map( i => (
                    <img key={i} className={styles.avatar} src={wavingAvatars[i]} alt="" />
                ))}
            </div>
            <IconContext.Provider value={{ color: "white", title: "Contact Us", size: "2rem" }}>
                <div className={styles.socialIcons}>
                    <a 
                        href="https://github.com/SharjeelSafdar/project4b-tiny-short-animation-with-react-hooks" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub className={styles.socialIcon} />
                    </a>
                    <a 
                        href="https://web.facebook.com/mian.safdar.3386" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaFacebookSquare className={styles.socialIcon} />
                    </a>
                </div>
            </IconContext.Provider>

            <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                © Project-4B | Sharjeel Safdar
            </Typography>
        </div>
    )
};

export default Footer
