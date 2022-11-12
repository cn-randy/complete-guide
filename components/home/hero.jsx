import classes from "./hero.module.css";
import Image from "next/image";

const Hero = function (props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="photo of Fred"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I&#39;m Fred</h1>
      <p>
        I blog about web development - especially front end frameworks like
        Angular or React.{" "}
      </p>
    </section>
  );
};

export default Hero;
