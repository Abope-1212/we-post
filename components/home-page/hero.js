import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/all.jpg"
          alt="An image showing ALL"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi, I'm wale</h1>
      <p>I love working with projects like this all my life time.</p>
    </section>
  );
}
