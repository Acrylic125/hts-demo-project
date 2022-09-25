import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import cx from "classnames";
import styles from "./BigSearch.module.css";
import Button from "../buttons/Button";

// TODO: Add debouncing to trigger onSearch.
export default function BigSearch({ defaultValue, onSearch, style, className }) {
  // React recommends we CONTROL the input, https://reactjs.org/docs/uncontrolled-components.html#:~:text=In%20most%20cases%2C%20we%20recommend,handled%20by%20the%20DOM%20itself.
  const [value, setValue] = useState(defaultValue || "");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = useCallback(
    debounce((searchValue) => {
      if (typeof onSearch === "function") {
        onSearch(searchValue);
      }
    }, 1000),
    []
  );

  useEffect(() => {
    search(value);
  }, [search, value]);

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
        }}
      />
      <Button onClick={() => search(value)}>Search</Button>
    </div>
  );
}

/**
 *
 * @param {T} cb
 * @param {number} wait
 * @param {boolean | undefined} immediate
 * @template {Function} T
 * @returns {T}
 */
function debounce(cb, wait, immediate = false) {
  return (...args) => {
    let timeout;
    const later = () => {
      timeout = null;
      if (!immediate) cb(...args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) cb(...args);
  };
}
