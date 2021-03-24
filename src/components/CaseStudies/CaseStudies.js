import React from 'react';
import { Typography } from '@material-ui/core';
import { caseStudy1, caseStudy2, caseStudy3 } from '../../images/images';
import styles from './CaseStudies.css';

const CaseStudies = () => {
    const caseStudies = [caseStudy1, caseStudy2, caseStudy3];
    const caseStudyTitles = [
        `Ausbeds: Scripted Chatbot`,
        `Blaze Research: Rebrand`,
        `COMING IN 2020- StartScale: 'Uber of Marketing'`,
    ];
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Typography variant="h5" style={{ color: '#ffffff' }}>
                    Case Studies
                </Typography>
            </div>

            <div className={styles.caseStudies}>
                {[0, 1, 2].map(i => (
                    <div className={styles.caseStudy}>
                        <div key={i} className={styles.gridBox}>
                            <img className={styles.image} src={caseStudies[i]} alt="" />
                            <div className={styles.shade}>
                                <div className={styles.caseStudyTitle}>
                                    <Typography variant="h6" style={{ color: '#ffffff' }}>
                                        {caseStudyTitles[i]}
                                    </Typography>
                                </div>
                                <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                                    Cortex Copywriter
                                    </Typography>
                            </div>
                        </div>
                    </div>
                ))}
                    </div>
        </div>
    )
}

export default CaseStudies
