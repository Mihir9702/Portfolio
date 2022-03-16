import React from 'react'
import styles from '../../styles/Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.fstar} />
      <div className={styles.mstar} />
      <div className={styles.bstar} />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Mihir</h1>
      </div>
    </header>
  )
}

export default Header
