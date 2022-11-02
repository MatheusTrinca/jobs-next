import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import styles from '../../../../styles/Jobs.module.css';
import { GetServerSideProps } from 'next';
import OutlinedButton from '../../../components/OutlinedButton';
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
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);

  const [companyName, setCompanyName] = useState('');

  const filterByDate = (days: number) => {
    const lastDays = new Date().getTime() - days * 24 * 60 * 60 * 1000;
    setSelectedJobs(prevState =>
      prevState
        // Filtering by last 7 days
        .filter(job => lastDays < new Date(job.postingDate).getTime())
        // Sorting, the filtered by last 7 days, by newest
        .sort((a, b) => (a.postingDate > b.postingDate ? -1 : 1))
    );
  };

  useEffect(() => {
    // it will only fire the filter if something was typed in the search input
    if (companyName.length > 0) {
      setSelectedJobs(prevState =>
        prevState.filter(job =>
          job.companyName.toLowerCase().includes(companyName)
        )
      );
    } else {
      // This will load the jobs in the inital render and if the search input was cleaned
      setSelectedJobs(jobs);
    }
    // Passing on dependency array to re-run at every input
  }, [companyName]);

  // This will clear all filters and sort
  const handleClear = () => {
    setCompanyName('');
    setSelectedJobs(jobs);
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
          <div className={styles.filterBy}>
            <span>Filter by: </span>
            <input
              className={styles.filterInput}
              placeholder="Company name"
              type="text"
              value={companyName}
              onChange={e => setCompanyName(e.target.value.toLowerCase())}
            />
            <OutlinedButton onClick={() => filterByDate(7)}>
              Last 7 days
            </OutlinedButton>
            <OutlinedButton onClick={handleClear}>Clear All</OutlinedButton>
          </div>
        </div>
        <div className={styles.jobsContainer}>
          {selectedJobs &&
            selectedJobs.map((job: Job) => (
              <JobCard {...job} key={job.jobId} />
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
      // I changed this property to 10 as mentioned in the directions, only the first 10 jobs.
      // But i could have made a slice(0,10), letting 20 in this case
      numJobs: 10,
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
