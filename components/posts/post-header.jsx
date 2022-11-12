import classes from "./post-header.module.css";
import Image from "next/legacy/image";

const PostHeader = function ({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
