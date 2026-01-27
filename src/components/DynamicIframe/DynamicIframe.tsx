import React, { useState } from "react";

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
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "16px",
            color: "#666",
          }}
        >
          Loading...
        </div>
      )}
      <iframe
        src={src}
        title={title}
        data-target-site={targetSite}
        onLoad={handleLoad}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: isLoading ? "none" : "block",
        }}
      />
    </div>
  );
};

export default DynamicIframe;
