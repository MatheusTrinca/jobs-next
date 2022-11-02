import React from 'react';
import styles from '../../styles/PlainButton.module.css';

interface IProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const PlainButton: React.FC<IProps> = ({ title, isActive, ...props }) => {
  return (
    <div className={styles.container}>
      <span {...props} className={styles.text}>
        {title}
      </span>
      {isActive && <span className={styles.isActive} />}
    </div>
  );
};

export default PlainButton;

// Arrumar o Responsivo do Footer
// Arrumar o Responsivo do Careens
// Fazer Post Job
