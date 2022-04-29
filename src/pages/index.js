
// React Components

import React from 'react';
import clsx from 'clsx';

// Docusaurus Components

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Bootstrap Components

import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

// Font Awesome Components

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNetworkWired,
  faDatabase,
  faCrown,
  faWallet,
  faTerminal,
  faCode,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';

// Localization API

/* import Translate, {translate} from '@docusaurus/Translate'; */

// Page Styling

import styles from './index.module.css';

// Page Content

export default () => {
  return (

    <Layout title='Dashboard'>

      <section id={styles.main} className='container'>

        <div className='row g-5 g-md-5'>

          <div className='col-12 col-md-6 col-lg-4'>
            <a href='/docs/inery-wallet-guide-1'>
              <div className={`${styles.card}`}>
                <h2 className={styles.cardTitle}><FontAwesomeIcon id={styles.faIcon0} className={styles.faIcon} icon={faWallet} />Inery Wallet Guide</h2>
                <p className={styles.cardDescription}>
                  Learn how to set up your Inery wallet.
                </p>
              </div>
            </a>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <a href='/docs/becoming-a-lite-node-1'>
              <div className={`${styles.card}`}>
                <h2 className={styles.cardTitle}><FontAwesomeIcon id={styles.faIcon1} className={styles.faIcon} icon={faNetworkWired} />Becoming a Lite Node</h2>
                <p className={styles.cardDescription}>
                  Become part of the Inery ecosystem by setting up a node.
                </p>
              </div>
            </a>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <a href='/docs/becoming-a-master-node-1'>
              <div className={`${styles.card}`}>
                <h2 className={styles.cardTitle}><FontAwesomeIcon id={styles.faIcon2} className={styles.faIcon} icon={faCrown} />Becoming a Master Node</h2>
                <p className={styles.cardDescription}>
                  Find out how to elevate yourself to a master node.
                </p>
              </div>
            </a>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <a href='/docs/command-line-1'>
              <div className={`${styles.card}`}>
                <h2 className={styles.cardTitle}><FontAwesomeIcon id={styles.faIcon3} className={styles.faIcon} icon={faCode} />Command Line</h2>
                <p className={styles.cardDescription}>
                  Familiarize yourself with the CLI through our comprehensive cline reference.
                </p>
              </div>
            </a>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <a href='#'>
              <div className={`${styles.card} ${styles.disabled}`}>
                <h2 className={styles.cardTitle}><img id={styles.faIcon3} className={styles.faIcon} src='/media/nft.png' />Claiming</h2>
                <p className={styles.cardDescription}>
                  Coming Soon
                </p>
              </div>
            </a>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <a href='#'>
              <div className={`${styles.card} ${styles.disabled}`}>
                <h2 className={styles.cardTitle}><FontAwesomeIcon id={styles.faIcon3} className={styles.faIcon} icon={faDatabase} />IneryDB</h2>
                <p className={styles.cardDescription}>
                  Coming Soon
                </p>
              </div>
            </a>
          </div>

        </div>

      </section>

    </Layout>
  )
}