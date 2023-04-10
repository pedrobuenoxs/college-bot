import React from 'react';
import styles from '@/styles/landing.module.css';
import Link from 'next/link';

const Landing: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Prof AI 🤓</h1>
        <p className={styles.description}>
          O chatbot com inteligência artificial que vai te ajudar a tirar suas
          dúvidas sobre a faculdade.
        </p>
        <Link className={styles.button} href="/chat" passHref>
          Converse agora
        </Link>
      </div>
    </div>
  );
};

export default Landing;
