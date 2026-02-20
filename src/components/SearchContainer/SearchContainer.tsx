import React, { useState } from "react";
import Button from "../ui/Button/Button";
import styles from "./SearchContainer.module.css";

interface SearchComponentProps {
  onSearch?: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className={styles.searchContainer}>
      <div className={styles.searchInputContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          id="search-input"
          className={styles.searchField}
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          id="clear-button"
          className={styles.clearButton}
          onClick={handleClear}
          ariaLabel="Clear input"
        >
          ✕
        </Button>
        <Button
          id="search-button"
          className={styles.searchButton}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </section>
  );
};

export default SearchComponent;
