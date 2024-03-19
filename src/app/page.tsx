import Image from "next/image";
import styles from "./home.module.css";
export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          officiis iste sit ipsam dolorum enim, vero beatae esse dolore
          cupiditate earum eligendi.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands-image"
            className={styles.brandImg}
            fill
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="hero-image"
          className={styles.heroImg}
          fill
        />
      </div>
    </section>
  );
}
