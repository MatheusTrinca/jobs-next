import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobs Home Page</title>
        <meta name="description" content="Test Jobs Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Get the job you really want</h2>
          <span>
            Discover your options with your personalized career search
          </span>
          <Link href="/test/jobs">Go to Test Jobs</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
