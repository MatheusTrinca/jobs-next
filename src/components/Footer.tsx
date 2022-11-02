import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>Jobs</h2>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link href="/test/jobs">Find Jobs</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/post-job">Post job</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contactContainer}>
          <p>Email: support@jobs.com</p>
          <p>Copyright © {new Date().getFullYear()} Jobs, inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
