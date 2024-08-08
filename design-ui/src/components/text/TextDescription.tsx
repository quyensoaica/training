import React from "react";
import "./text.scss";

const TextDescription = ({ className, children, size = "1.6rem" }: { className?: string; size?: string; children: React.ReactNode }) => {
  return (
    <h5 className={`text-description ${className}`} style={{ fontSize: size }}>
      {children}
    </h5>
  );
};
export default TextDescription;
