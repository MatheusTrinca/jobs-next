import React from 'react';
import styles from '../../styles/NavbarMobile.module.css';

interface IProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const NavbarMobile = ({ active, setActive }: IProps) => {
  return <div className={styles.navbarMobile}></div>;
};

export default NavbarMobile;
