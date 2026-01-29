import React, { useState } from "react";
import styles from "./DynamicIframe.module.css";

interface DynamicIframeProps {
  src: string;
  title: string;
  targetSite: string;
}

const DynamicIframe: React.FC<DynamicIframeProps> = ({
  src,
  title,
  targetSite,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.loadingOverlay}>Loading...</div>}
      <iframe
        src={src}
        title={title}
        data-target-site={targetSite}
        onLoad={handleLoad}
        className={`${styles.iframe} ${isLoading ? styles.loading : styles.loaded}`}
      />
    </div>
  );
};

export default DynamicIframe;
