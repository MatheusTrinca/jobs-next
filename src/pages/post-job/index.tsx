import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const PostJob = () => {
  return (
    <>
      <Head>
        <title>Post Job</title>
        <meta name="description" content="Test Jobs Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ height: '100vh' }}>
        <h1>Post Job Page Content</h1>
      </main>
      <Footer />
    </>
  );
};

export default PostJob;
