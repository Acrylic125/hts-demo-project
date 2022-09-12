import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import cx from "classnames";
import styles from "./BigSearch.module.css";
import Button from "../buttons/Button";

// TODO: Add debouncing to trigger onSearch.
export default function BigSearch({ defaultValue, onSearch, style, className }) {
  // React recommends we CONTROL the input, https://reactjs.org/docs/uncontrolled-components.html#:~:text=In%20most%20cases%2C%20we%20recommend,handled%20by%20the%20DOM%20itself.
  const [value, setValue] = useState(defaultValue || "");

  const search = () => {
    if (typeof onSearch === "function") {
      onSearch(value);
    }
    console.log(value);
  };

  return (
    <div style={style} className={cx(styles.wrapper, className)}>
      <span className={styles.icon}>
        <FaSearch size={14} />
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          //   search();
        }}
      />
      <Button onClick={search}>Search</Button>
    </div>
  );
}
