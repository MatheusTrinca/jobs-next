import React from 'react';
import { Job } from '../pages/test/jobs';
import styles from '../../styles/JobCard.module.css';

const JobCard = ({
  jobTitle,
  companyName,
  jobDescription,
  postingDate,
}: Job) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{jobTitle}</h4>
      <p className={styles.companyName}>{companyName}</p>
      <p className={styles.description}>
        {/* Replacing the html tags <br/> and <p/> */}
        {jobDescription.replace(/[<br ?\/?><p ?\/?>]/g, '\n')}
      </p>
      <p className={styles.date}>
        Published in: {new Date(postingDate).toDateString()}
      </p>
    </div>
  );
};

export default JobCard;
