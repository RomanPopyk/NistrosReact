import { useState } from "react";

export default function French() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your dictionary search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <main>
        <div className="dictionary-container">
          <h2>🇫🇷 French Dictionary</h2>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a word..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
