import React from 'react';
import { Typography } from '@material-ui/core';
import { FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";
import styles from './Contact.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h5" style={{ color: '#ffffff' }}>
                Pick my brain/cortex and let's get started on your project
            </Typography>
            <div className={styles.button}>
                <IconContext.Provider value={{ color: "white", title: "Contact Us", size: "3rem" }}>
                    <FaEnvelope />
                </IconContext.Provider>
                <Typography variant="h6" style={{ color: '#ffffff' }}>
                    someone123@example.com
                </Typography>
            </div>
        </div>
    )
}

export default Contact
