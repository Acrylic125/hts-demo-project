import React from "react";
import CocktailCard from "./CocktailCard";
import cx from "classnames";
import styles from "./Cocktails.module.css";

export default function Cocktails({ cocktails, style, className }) {
  return (
    <ul style={style} className={cx(styles.container, className)}>
      {cocktails.map(({ id, name, description, image, link }) => (
        <li key={id}>
          <CocktailCard name={name} description={description} image={image} link={link} />
        </li>
      ))}
    </ul>
  );
}
