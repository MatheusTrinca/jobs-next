import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import styles from '../../../../styles/Jobs.module.css';
import { GetServerSideProps } from 'next';
import FilterButton from '../../../components/FilterButton';
import JobCard from '../../../components/JobCard';
import { EventEmitter } from 'stream';

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
  // Slice method to bring only the 10 first at the first render
  const [selectedJobs, setSelectedJobs] = useState<Job[]>(jobs.slice(0, 10));

  // Filtering function by query parameter (company or last 7 days)
  const filter = (query: string) => {
    if (query === 'company') {
      setSelectedJobs(
        jobs.sort((a, b) => (a.companyName < b.companyName ? -1 : 1))
      );
    } else {
      const last7Days = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;

      setSelectedJobs(
        jobs
          // Filtering by last 7 days
          .filter(job => last7Days < new Date(job.postingDate).getTime())
          // Sorting, the filtered by last 7 days, by newest
          .sort((a, b) => (a.postingDate > b.postingDate ? -1 : 1))
      );
    }
  };

  console.log(selectedJobs);

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
          {selectedJobs &&
            selectedJobs.map((job: Job) => (
              <div key={job.jobId}>
                <JobCard {...job} />
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Jobs;

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
