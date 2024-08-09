"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './DownloadApp.module.css';
import appMockup from '../../../public/assets/app.png';
import googlePlayBadge from '../../../public/assets/google.png';
import appStoreBadge from '../../../public/assets/apple.png';

export default function DownloadApp() {
  const [showBadges, setShowBadges] = useState(false);

  const handleDownloadClick = () => {
    setShowBadges(!showBadges);
  };

  return (
    <>
      <div className={styles.wave}></div>
      <section className={styles.downloadApp}>
        <div className={styles.imageContainer}>
          <Image src={appMockup} alt="App Mockup" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Download Our App</h2>
          <p className={styles.description}>
            Experience the convenience of drone delivery right at your fingertips. Download our app now and enjoy fast, reliable food delivery services.
          </p>
          <button className={styles.button}>
            Download
            <div className={styles.badges}>
              <Image src={googlePlayBadge} alt="Google Play Store" className={styles.storeBadge} />
              <Image src={appStoreBadge} alt="App Store" className={styles.storeBadge} />
            </div>
          </button>
        </div>
      </section>
    </>
  );
}