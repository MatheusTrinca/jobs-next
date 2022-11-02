import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers Jobs</title>
        <meta name="description" content="Test Jobs Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>Careers Page Content</h1>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
