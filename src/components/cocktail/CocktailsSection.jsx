import React, { useState } from "react";
import { getCocktails } from "../../data/cocktails";
import BigSearch from "../search/BigSearch";
import cx from "classnames";
import Cocktails from "./Cocktails";
import styles from "./CocktailsSection.module.css";

export default function CocktailsSection({ style, className }) {
  const [search, setSearch] = useState("");
  const cocktails = getCocktails();
  return (
    <section style={style} className={cx(styles.section, className)}>
      <header className={styles.header}>
        <BigSearch onSearch={setSearch} className={styles.search} />
      </header>
      <div>
        <Cocktails
          className={styles.cocktails}
          cocktails={cocktails
            .filter(({ name }) => {
              return name.toLowerCase().includes(search.toLowerCase());
            })
            .map((cocktail) => {
              return {
                name: cocktail.name,
                description: cocktail.description,
                image: cocktail.images[0]?.url || "",
                link: "",
              };
            })}
        />
      </div>
    </section>
  );
}
