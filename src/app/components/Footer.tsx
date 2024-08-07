import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul>
                        <li>Food Delivery</li>
                        <li>Express Delivery</li>
                        <li>Partner with Us</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Partners</h3>
                    <ul>
                        <li>Restaurant Partners</li>
                        <li>Delivery Partners</li>
                        <li>Become a Partner</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Terms</h3>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Help & Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Support Center</li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© 2024 AirMeal. All rights reserved.</p>
            </div>
        </footer>
    );
}
