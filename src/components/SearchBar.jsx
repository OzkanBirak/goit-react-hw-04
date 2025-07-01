import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa"; // Font Awesome büyüteç ikonu

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Lütfen aranacak kelime girin!");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.searchIcon}>
          <FaSearch size={16} color="#007acc" />
        </button>
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Search images and photos"
          className={styles.input}
        />
      </form>
    </header>
  );
};

export default SearchBar;
