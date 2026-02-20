import React, { useState, useRef, useEffect } from "react";
import Button from "../ui/Button/Button";
import DynamicIframe from "../DynamicIframe/DynamicIframe";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import styles from "./TabContainer.module.css";

export interface Tab {
  id: number;
  label: string;
  src: string;
  title: string;
  targetSite: string;
}

interface TabContainerProps {
  tabs: Tab[];
  defaultActiveTab?: number;
}

const TabContainer: React.FC<TabContainerProps> = ({
  tabs = [],
  defaultActiveTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
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
  }, [activeTab, tabs.length]);

  return (
    <section className={styles.tabContainer}>
      {/* Tab Header */}
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            isActive={activeTab === tab.id}
            ariaLabel={tab.label}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Swipe Container */}
      <div
        className={styles.swipeContainer}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Swipe Wrapper */}
        <div
          ref={wrapperRef}
          className={styles.swipeWrapper}
          style={{
            width: `${tabs.length * 100}%`,
            transform: `translateX(-${(activeTab * 100) / tabs.length}%)`,
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={styles.tabPanel}
              style={{ width: `${100 / tabs.length}%` }}
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
        <div className={styles.swipeOverlay} />
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator total={tabs.length} activeIndex={activeTab} />
    </section>
  );
};

export default TabContainer;
