import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import styles from '../../../../styles/Jobs.module.css';
import { GetServerSideProps } from 'next';
import FilterButton from '../../../components/FilterButton';
import JobCard from '../../../components/JobCard';

export interface Job {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  postingDate: string;
  companyLogo: string;
}

export interface JobProps {
  jobs: Job[];
}

const Jobs: React.FC<JobProps> = ({ jobs }) => {
  // Getting all company names to filter by companyName after
  const companyNames = jobs.map(job => job.companyName);

  console.log(companyNames);

  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);

  const filter = (query: string) => {
    // if (query === 'company') {
    //   setSelectedJobs(jobs.filter())
    // }
  };

  return (
    <>
      <Head>
        <title>Test Jobs</title>
        <meta name="description" content="Test Jobs Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <span>Filter by: </span>
          <FilterButton onClick={() => filter('company')}>Company</FilterButton>
          <FilterButton onClick={() => filter('last7days')}>
            Last 7 days
          </FilterButton>
        </div>
        <div className={styles.jobsContainer}>
          {jobs &&
            jobs.map((job: Job, idx) => {
              if (idx < 10) {
                return (
                  <div key={job.jobId}>
                    <JobCard {...job} />
                  </div>
                );
              }
            })}
        </div>
      </main>
      <Footer />
    </>
  );
};

// Server side fetching jobs from API
export const getServerSideProps: GetServerSideProps<JobProps> = async () => {
  const response = await fetch('https://www.zippia.com/api/jobs/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    }),
  });

  const { jobs } = await response.json();

  return {
    props: {
      jobs,
    },
  };
};

export default Jobs;
