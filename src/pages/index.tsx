import Head from 'next/head';
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
        <h2>Home Page</h2>
      </main>
      <Footer />
    </>
  );
}
