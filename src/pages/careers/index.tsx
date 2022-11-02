import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../../styles/Careers.module.css';
import PlainButton from '../../components/PlainButton';

const Careers = () => {
  const [selectedArea, setSelectedArea] = useState('Jobs');

  return (
    <>
      <Head>
        <title>Careers Jobs</title>
        <meta name="description" content="Test Jobs Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Explore jobs, majors, and cities</h2>
          <div className={styles.areas}>
            <PlainButton
              title="Jobs"
              onClick={() => setSelectedArea('Jobs')}
              isActive={selectedArea === 'Jobs'}
            />
            <PlainButton
              title="Majors"
              onClick={() => setSelectedArea('Majors')}
              isActive={selectedArea === 'Majors'}
            />
            <PlainButton
              title="Companies"
              onClick={() => setSelectedArea('Companies')}
              isActive={selectedArea === 'Companies'}
            />
          </div>
          <div className={styles.inputController}>
            <input placeholder={selectedArea} className={styles.input} />
            {/* icone aqui, salvar png */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
