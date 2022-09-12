import React from "react";
import ThemeSwitcher from "../../components/theme/ThemeSwitcher";
import styles from "./CocktailsPage.module.css";

export default function CocktailsPage() {
  console.log(styles);
  return (
    <div className={`${styles.body} body`}>
      <h1 className={styles.header}>Cocktails</h1>
      <p className={styles.subheader}>Over 100+ cocktails to choose from.</p>
      <ThemeSwitcher className={styles.themeSwitcher} />
    </div>
  );
}

// export default function CocktailsPage() {
//   return (
//     <div className={styles.darkBody}>
//       <h1 className={styles.darkHeader}>Cocktails</h1>
//       <p className={styles.subheader}>Over 100+ cocktails to choose from.</p>
//       <ThemeSwitcher className={styles.themeSwitcher} />
//     </div>
//   );
// }
