import React from "react";
import "./text.scss";

const TextHeaderSection = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h3 className={`text-header ${className}`}>{children}</h3>;
};
export default TextHeaderSection;
