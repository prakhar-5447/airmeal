import styles from './Features.module.css';

export default function Features() {
    return (
        <>
            <section className={styles.features}>
                <h1 className={styles.sectionTitle}>How It Works</h1>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div className={styles.icon}>🛸</div>
                        <h3 className={styles.title}>Step 1: Order</h3>
                        <p className={styles.description}>
                            Choose your favorite meals from our app and place an order easily.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.icon}>📦</div>
                        <h3 className={styles.title}>Step 2: Prepare</h3>
                        <p className={styles.description}>
                            Our partner restaurants prepare your meals with care and precision.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.icon}>🏠</div>
                        <h3 className={styles.title}>Step 3: Deliver</h3>
                        <p className={styles.description}>
                            Our drones deliver your meals swiftly and safely to your doorstep.
                        </p>
                    </div>
                </div>
                <div className={styles.aboutUsSection}>
                    <p>
                        AirMeal is revolutionizing the food delivery industry with cutting-edge drone technology. Our mission is to provide fast, efficient, and eco-friendly meal delivery services to our customers. With a network of partnered restaurants and a fleet of high-tech drones, we are able to deliver a wide variety of cuisines to multiple cities.
                    </p>
                    <p>
                        Our team is dedicated to ensuring that your meals are delivered quickly and safely, while also reducing the carbon footprint associated with traditional delivery methods. Join us in experiencing the future of food delivery.
                    </p>
                </div>
            </section>
        </>
    );
}
