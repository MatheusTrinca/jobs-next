import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  // This a state to control the opening and closing of mobile navbar
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <h2 className={styles.logo}>
          <Link href="/">Jobs</Link>
        </h2>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link
                href="/test/jobs"
                className={
                  router.pathname === '/test/jobs' ? styles.active : ''
                }
              >
                Find Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={router.pathname === '/careers' ? styles.active : ''}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/post-job"
                className={router.pathname === '/post-job' ? styles.active : ''}
              >
                Post job
              </Link>
            </li>
          </ul>
        </div>
        <div
          // i'm controlling the different styles to make an X to close the mobile links
          className={mobileMenuActive ? styles.activeMenuIcon : styles.menuIcon}
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
      </nav>
      {/* If mobile menu icon is clicked it will open the links or close them */}
      {mobileMenuActive && (
        <div className={styles.mobileMenuList}>
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
      )}
    </>
  );
};

export default Navbar;
