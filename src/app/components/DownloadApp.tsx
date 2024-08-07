"use client";
import Image from 'next/image';
import styles from './DownloadApp.module.css';
import appMockup from '../../../public/assets/app.png';
import DownloadModal from '../utils/DownloadModal';
import { useRef, useState } from 'react';

export default function DownloadApp() {
  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleDownloadClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
          <button className={styles.button} onClick={handleDownloadClick} ref={buttonRef}>Download</button>
        </div>
        {isModalOpen && <DownloadModal closeModal={closeModal} buttonRef={buttonRef} />}
      </section>
    </>
  );
}