import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20532916/pexels-photo-20532916/free-photo-of-red-haired-woman-in-jacket-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2021</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          praesentium quo adipisci ea laborum, alias numquam sed dolorum error
          consectetur blanditiis, voluptatum itaque fugiat. Enim delectus vel
          eius quaerat cumque!
        </p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
