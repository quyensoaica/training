import React, { useEffect, useMemo, useState } from "react";
import "./text.scss";

interface IReponsive {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  default: string;
}

interface ITextProps {
  className?: string;
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  color?: string | "primary" | "black" | "white" | "grey" | "success" | "error" | "warning" | "info";
  textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
  gutterBottom?: boolean;
  style?: React.CSSProperties;
  fontSize?: string | IReponsive;
  fontWeight?: number;
  fontFamily?: "Oxigen" | "Alternate Gothic No1 D";
  uppercase?: boolean;
  type?: "header" | "title" | "normal";
}

const Text = ({
  className,
  children,
  variant = "p",
  color = "black",
  textAlign = "inherit",
  gutterBottom = false,
  style,
  fontSize,
  fontWeight = 400,
  fontFamily = "Oxigen",
  uppercase = false,
  type,
}: ITextProps) => {
  const [width, setWindowWidth] = useState(0);
  const [Tag, setTag] = useState(variant as keyof JSX.IntrinsicElements);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const typeStyle = useMemo(() => {
    switch (type) {
      case "header":
        setTag("h3");
        return {
          fontWeight: 500,
          fontSize: "9rem",
          fontFamily: "Alternate Gothic No1 D",
          color: "var(--primary-color)",
          lineHeight: 1,
        };
      case "title":
        setTag("h5");
        return {
          fontWeight: 500,
          fontSize: "5.6rem",
          lineHeight: 1,
          fontFamily: "Alternate Gothic No1 D",
        };
      case "normal":
        setTag("p");
        return {
          fontSize: "1.8rem",
          lineHeight: 2.0,
          color: "rgba(35, 35, 39, 0.7)",
          fontWeight: 400,
          fontFamily: "Oxigen",
        };
      default:
        return {};
    }
  }, [type]);

  const variantStyle = useMemo(() => {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return {
          fontFamily: "Alternate Gothic No1 D",
          fontWeight: 500,
        };
      default:
        return {
          fontFamily: "Oxigen",
          fontWeight: 400,
        };
    }
  }, [variant]);

  const reponsiveStyle = useMemo(() => {
    switch (true) {
      case width < 576:
        return {
          fontSize: typeof fontSize === "object" ? fontSize?.xs ?? fontSize.default : fontSize,
        };
      case width < 768:
        return {
          fontSize: typeof fontSize === "object" ? fontSize?.sm ?? fontSize.default : fontSize,
        };
      case width < 992:
        return {
          fontSize: typeof fontSize === "object" ? fontSize?.md ?? fontSize.default : fontSize,
        };
      case width < 1200:
        return {
          fontSize: typeof fontSize === "object" ? fontSize?.lg ?? fontSize.default : fontSize,
        };
      default:
        return {
          fontSize: typeof fontSize === "object" ? fontSize?.xl ?? fontSize.default : fontSize,
        };
    }
  }, [width]);

  const cssStyle: React.CSSProperties = {
    ...variantStyle,
    color,
    textAlign,
    fontFamily,
    fontWeight,
    marginBottom: gutterBottom ? "0.8rem" : 0,
    textTransform: uppercase ? "uppercase" : "none",
    ...typeStyle,
    ...reponsiveStyle,
    ...style,
  };

  return (
    <Tag className={`text-${color} ${className}`} style={cssStyle}>
      {children}
    </Tag>
  );
};
export default Text;
