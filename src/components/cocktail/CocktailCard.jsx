import React from "react";
import cx from "classnames";
import styles from "./CocktailCard.module.css";

export default function CocktailCard({ name, description, image, link, style, className }) {
  return (
    <div className={cx(styles.card, className)}>
      <img className={styles.cardImage} src={image} alt={image} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <a className={styles.cardLearnMore} href={link}>
        Learn More
      </a>
    </div>
  );
}
