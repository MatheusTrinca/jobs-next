import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <nav className={styles.container}>
      <h2 className={styles.logo}>
        <Link href="/">Jobs</Link>
      </h2>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link
              href="/test/jobs"
              className={router.pathname === '/test/jobs' ? styles.active : ''}
            >
              Find Jobs
            </Link>
          </li>
          <li>
            <Link
              href="/test/careers"
              className={
                router.pathname === '/test/careers' ? styles.active : ''
              }
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/test/post-job"
              className={
                router.pathname === '/test/post-job' ? styles.active : ''
              }
            >
              Post job
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={mobileMenuActive ? styles.activeMenuIcon : styles.menuIcon}
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
      >
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </nav>
  );
};

export default Navbar;
