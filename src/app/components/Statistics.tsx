"use client";
import { useEffect, useState } from 'react';
import styles from './Statistics.module.css';

function useCountUp(targetValue: any, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: any = null;

        const animate = (currentTime: any) => {
            if (startTime === null) startTime = currentTime;
            const progress = currentTime - startTime;
            const progressPercentage = Math.min(progress / duration, 1);
            setCount(Math.floor(progressPercentage * targetValue));
            if (progressPercentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [targetValue, duration]);

    return count;
}

export default function Statistics() {
    const restaurantsCount = useCountUp(1200);
    const citiesCount = useCountUp(150);
    const usersCount = useCountUp(50000);

    return (
        <>
            <section className={styles.statistics}>
                <div className={styles.stat}>
                    <h2 className={styles.number}>{restaurantsCount}{restaurantsCount > 0 ? <>+</> : <></>}</h2>
                    <p className={styles.label}>Restaurants Partnered</p>
                </div>
                <div className={styles.stat}>
                    <h2 className={styles.number}>{citiesCount}</h2>
                    <p className={styles.label}>Cities</p>
                </div>
                <div className={styles.stat}>
                    <h2 className={styles.number}>{usersCount}</h2>
                    <p className={styles.label}>Users Registered</p>
                </div>
            </section>
            <section className={styles.joinPartner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Partner with Us</h1>
                    <p className={styles.description}>
                        Join our drone delivery service and take your restaurant to new heights! Deliver hot and fresh meals to your customers faster than ever before.
                    </p>
                    <button className={styles.button}>Join Now</button>
                </div>
            </section>
        </>
    );
}
