import React from "react";
import "./text.scss";

const TextHeaderBox = ({ className, children, size = "36px" }: { className?: string; size?: string; children: React.ReactNode }) => {
  return (
    <h5 className={`header-box-text ${className}`} style={{ fontSize: size, lineHeight: size }}>
      {children}
    </h5>
  );
};
export default TextHeaderBox;
