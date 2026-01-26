import React, { useState } from "react";
import Button from "../ui/Button/Button";
import "./SearchContainer.module.css";

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
    <section className="search-container">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          id="search-input"
          className="search-field"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          id="clear-button"
          className="clear-button"
          onClick={handleClear}
          ariaLabel="Clear input"
        >
          ✕
        </Button>
        <Button
          id="search-button"
          className="update-button"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </section>
  );
};

export default SearchComponent;
