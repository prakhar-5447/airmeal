"use client";

import { useState } from 'react';
import styles from './FAQs.module.css';
import Image from 'next/image';
import arrow from "../../../public/assets/arrow.svg"

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqsSection}>
            <h1>FAQs</h1>
            <div className={styles.accordion}>
                <div className={styles.accordionItem}>
                    <button className={styles.accordionButton} onClick={() => toggleAccordion(0)}>
                        What is AirMeal? <span className={`${styles.arrow} ${activeIndex === 0 ? styles.active : ''}`}><Image src={arrow} alt="arrow" /></span>
                    </button>
                    <div className={`${styles.accordionContent} ${activeIndex === 0 ? styles.active : ''}`}>
                        <p>AirMeal is a drone-based food delivery service that brings your favorite meals to your doorstep quickly and efficiently.</p>
                    </div>
                </div>

                <div className={styles.accordionItem}>
                    <button className={styles.accordionButton} onClick={() => toggleAccordion(1)}>
                        How does AirMeal work? <span className={`${styles.arrow} ${activeIndex === 1 ? styles.active : ''}`}><Image src={arrow} alt="arrow" /></span>
                    </button>
                    <div className={`${styles.accordionContent} ${activeIndex === 1 ? styles.active : ''}`}>
                        <p>You place an order through our app, and our drones deliver your food directly to your location. It{"'"}s fast, eco-friendly, and convenient.</p>
                    </div>
                </div>

                <div className={styles.accordionItem}>
                    <button className={styles.accordionButton} onClick={() => toggleAccordion(2)}>
                        Which cities are covered by AirMeal? <span className={`${styles.arrow} ${activeIndex === 2 ? styles.active : ''}`}><Image src={arrow} alt="arrow" /></span>
                    </button>
                    <div className={`${styles.accordionContent} ${activeIndex === 2 ? styles.active : ''}`}>
                        <p>We currently operate in several major cities. Please check our app or website for the latest list of available locations.</p>
                    </div>
                </div>

                <div className={styles.accordionItem}>
                    <button className={styles.accordionButton} onClick={() => toggleAccordion(3)}>
                        How do I track my order? <span className={`${styles.arrow} ${activeIndex === 3 ? styles.active : ''}`}><Image src={arrow} alt="arrow" /></span>
                    </button>
                    <div className={`${styles.accordionContent} ${activeIndex === 3 ? styles.active : ''}`}>
                        <p>You can track your order in real-time through our app. You{"'"}ll receive updates on your delivery status from the moment you place your order until it arrives.</p>
                    </div>
                </div>
            </div>1        </section>
    );
}
