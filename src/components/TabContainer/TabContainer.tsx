import "./TabContainer.module.css";

import React, { useState, useRef, useEffect } from "react";
import Button from "../ui/Button/Button";
import DynamicIframe from "../DynamicIframe/DynamicIframe";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

interface Tab {
  id: number;
  label: string;
  src: string;
  title: string;
  targetSite: string;
}

const tabs: Tab[] = [
  {
    id: 0,
    label: "📚 EN Wiktionary",
    src: "https://en.wiktionary.org/wiki",
    title: "English Wiktionary",
    targetSite: "en-wiktionary",
  },
  {
    id: 1,
    label: "📖 FR Wiktionary",
    src: "https://fr.wiktionary.org/wiki",
    title: "French Wiktionary",
    targetSite: "fr-wiktionary",
  },
  {
    id: 2,
    label: "🔤 Dict.com",
    src: "https://dict.com/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%8C%D0%BA%D0%BE-%D1%83%D0%BA%D1%80%D0%B0%D1%96%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B8",
    title: "Dict.com",
    targetSite: "dict-fr-ua",
  },
  {
    id: 3,
    label: "🌱 Etymonline",
    src: "https://www.etymonline.com",
    title: "Etymology Online",
    targetSite: "etymonline",
  },
  {
    id: 4,
    label: "🌐 FR Wikipedia",
    src: "https://fr.wikipedia.org/wiki",
    title: "French Wikipedia",
    targetSite: "fr-wikipedia",
  },
  {
    id: 5,
    label: "Conjugation",
    src: "https://www.conjugation-fr.com/index.html",
    title: "Conjugation",
    targetSite: "conjugation-fr",
  },
];

const TabContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
    if (isRightSwipe && activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && activeTab > 0) {
        setActiveTab(activeTab - 1);
      } else if (e.key === "ArrowRight" && activeTab < tabs.length - 1) {
        setActiveTab(activeTab + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Tab Header */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "2px solid #ddd",
          overflowX: "auto",
          flexWrap: "wrap",
        }}
      >
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
            ariaLabel={tab.label}
            style={{
              padding: "10px 16px",
              border: "none",
              backgroundColor: activeTab === tab.id ? "#007bff" : "#fff",
              color: activeTab === tab.id ? "#fff" : "#333",
              cursor: "pointer",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Swipe Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          overflow: "hidden",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Swipe Wrapper */}
        <div
          ref={wrapperRef}
          style={{
            display: "flex",
            width: `${tabs.length * 100}%`,
            height: "100%",
            transform: `translateX(-${(activeTab * 100) / tabs.length}%)`,
            transition: "transform 0.3s ease",
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={{
                width: `${100 / tabs.length}%`,
                height: "100%",
                flexShrink: 0,
              }}
            >
              <DynamicIframe
                src={tab.src}
                title={tab.title}
                targetSite={tab.targetSite}
              />
            </div>
          ))}
        </div>

        {/* Swipe Overlay (for visual feedback) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator total={tabs.length} activeIndex={activeTab} />
    </section>
  );
};

export default TabContainer;
