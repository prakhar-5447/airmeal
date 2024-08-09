import styles from './VideoSection.module.css';
import blog1 from "../../../public/assets/blog1.jpeg"
import blog2 from "../../../public/assets/blog2.jpeg"
import blog3 from "../../../public/assets/blog3.jpeg"
import Image from 'next/image';

export default function VideoSection() {
  return (
    <>
      <section className={styles.videoSection}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          src="/airmeal/assets/drone.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className={styles.infoContainer}>
          <h1>About <i>AirMeal</i></h1>
          <p>
            We are a leading provider of drone-based food delivery services, offering fast and efficient delivery solutions for your favorite meals. Our mission is to revolutionize the food delivery industry with cutting-edge technology and exceptional service.
          </p>
        </div>
      </section>
      <section className={styles.moreAboutSection}>
        <h1>More about AirMeal</h1>
        <div className={styles.blogContainer}>
          <div className={styles.blogCard}>
            <div className={styles.blogImageFrame}>
              <Image src={blog1} alt="No Image" className={styles.blogImage} />
            </div>
            <h1>Revolutionizing Food Delivery with Drones. Discover how drones are transforming the food delivery landscape with unmatched speed and efficiency. To make the service work in a dense city, Meituan doesn’t have the drones deliver directly to your doorstep. </h1>
          </div>
          <div className={styles.blogCard}>
            <div className={styles.blogImageFrame}>
              <Image src={blog2} alt="No Image" className={styles.blogImage} />
            </div>
            <h1>How Drones are Changing the Food Industry. Explore the impact of drones on the food industry and what it means for the future of food delivery. The economic viability for using drones to deliver food of course is still unproven.</h1>
          </div>
          <div className={styles.blogCard}>
            <div className={styles.blogImageFrame}>
              <Image src={blog3} alt="No Image" className={styles.blogImage} />
            </div>
            <h1>The Future of Food Delivery: Drones and Beyond. Learn about the innovative technologies and advancements that are shaping the future of food delivery. Today’s drone-deliveries cover a broad range of goods: vaccines, medical supplies, and blood transfusions.</h1>
          </div>
        </div>
      </section>
    </>
  );
}
