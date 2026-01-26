import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <p id="description-homepage">
          This is a dictionary app. Please select a language to learn
        </p>
        <div className="language-selection-container">
          <button
            className="language-button"
            onClick={() => navigate("/english")}
          >
            🇬🇧 English
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/french")}
          >
            🇫🇷 Français
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/spanish")}
          >
            🇪🇸 Spanish
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/italian")}
          >
            🇮🇹 Italiano
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/german")}
          >
            🇩🇪 Deutsch
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/slovak")}
          >
            🇸🇰 Slovenský
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/ukrainian")}
          >
            🇺🇦 Українська
          </button>
        </div>
      </main>
    </>
  );
}
