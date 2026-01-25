import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <p id="description-homepage">
          This is a dictionary app. Please select a language
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
            onClick={() => navigate("/slovak")}
          >
            🇸🇰 Slovenský
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/german")}
          >
            🇩🇪 Deutsch
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/italian")}
          >
            🇮🇹 Italiano
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/french-test")}
          >
            Test swipe function
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/french-swipe-works")}
          >
            Swipe works, but need to grab for longer
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/smooth-swipe-edit")}
          >
            Smooth
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/swipe-bottom")}
          >
            Bottom
          </button>
          <button
            className="language-button"
            onClick={() => navigate("/french-modular-path")}
          >
            Modular
          </button>
        </div>
      </main>
    </>
  );
}
