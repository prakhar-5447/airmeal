import styles from './DownloadModal.module.css';
import Image from 'next/image';
import close from '../../../public/assets/close.png';
import googlePlayBadge from '../../../public/assets/google.png';
import appStoreBadge from '../../../public/assets/apple.png';

export default function Modal({ closeModal, buttonRef }) {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const modalStyle = {
        top: `${buttonRect.top + window.scrollY}px`,
        left: `${buttonRect.right + window.scrollX + 10}px`,
    };

    return (
        <div className={styles.modalContent} style={modalStyle}>
            <button className={styles.closeButton} onClick={closeModal}>
                <Image src={close} alt='close' width={15} height={15}></Image>
            </button>
            <div className={styles.storeButtons}>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <Image src={googlePlayBadge} alt="Google Play Store" width={150} height={50} />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <Image src={appStoreBadge} alt="App Store" width={150} height={50} />
                </a>
            </div>
        </div>
    );
}
