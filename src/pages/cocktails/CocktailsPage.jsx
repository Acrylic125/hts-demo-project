import React from "react";
import CocktailsSection from "../../components/cocktail/CocktailsSection";
import ThemeSwitcher from "../../components/theme/ThemeSwitcher";
import styles from "./CocktailsPage.module.css";

export default function CocktailsPage() {
  return (
    <div className={`${styles.body} body`}>
      <h1 className={styles.header}>Cocktails</h1>
      <p className={styles.subheader}>Over 100+ cocktails to choose from.</p>

      <CocktailsSection className={styles.cocktails} />

      <ThemeSwitcher className={styles.themeSwitcher} />
    </div>
  );
}
