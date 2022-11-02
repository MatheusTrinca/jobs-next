import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Jobs = () => {
  return (
    <>
      <Head>
        <title>Test Jobs</title>
        <meta name="description" content="Test Jobs Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>Main Content</h1>
      </main>
      <Footer />
    </>
  );
};

export default Jobs;
