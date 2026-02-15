import React from "react";

interface ProgressIndicatorProps {
  total: number;
  activeIndex: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  total,
  activeIndex,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        padding: "16px 0",
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: index === activeIndex ? "#007bff" : "#ccc",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
