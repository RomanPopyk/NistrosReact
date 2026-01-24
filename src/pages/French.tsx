import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function French() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your dictionary search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      <header>
        <div className="home-icon-container">
          <button onClick={() => navigate('/')} className="home-link">
            <img src="/front-end/favicon500x500.jpeg" alt="Home_Icon" className="home-icon" />
          </button>
        </div>
        <div className="header-title-container">
          <h1 className="title">French Dictionary</h1>
        </div>
      </header>
      
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
      
      <footer id="home-page-footer">
        <p>
          <a href="mailto:romanrpopyk@ukr.net">Contact me</a>
        </p>
        <p id="copyright-container">&copy; 2025 Nistros Free Access</p>
      </footer>
    </>
  );
}