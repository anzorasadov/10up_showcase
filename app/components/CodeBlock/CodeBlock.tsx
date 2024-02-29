"use client";
import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import gsap from "gsap";
import styles from "./CodeBlock.module.css";
import "./prismtheme.css";

type CodeBlockProps = {
  children: string;
  title?: string;
  isCollapsable?: boolean;
  className?: string;
};

const CodeBlock = ({ title, children, isCollapsable, className }: CodeBlockProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseContaierRef = useRef(null);
  useEffect(() => Prism.highlightAll(), []);

  useEffect(() => {
    if (isCollapsed) {
      gsap.to(collapseContaierRef.current, { height: "0", paddingBottom: 0 });
    } else {
      gsap.to(collapseContaierRef.current, { height: "auto", paddingBottom: "1rem" });
    }
  }, [isCollapsed]);

  const highlitedCode = (
    <pre>
      <code className="language-javascript">{children}</code>
    </pre>
  );

  return isCollapsable ? (
    <div className={`${styles.collapsable} ${className}`}>
      <div className={styles.collapseTrigger} onClick={() => setIsCollapsed(!isCollapsed)}>
        <h4>
          <span>{title}</span>
          <span>{isCollapsed ? "+" : "-"}</span>
        </h4>
      </div>
      <div className={styles.colapseContainer} ref={collapseContaierRef}>
        {highlitedCode}
      </div>
    </div>
  ) : (
    highlitedCode
  );
};

export default CodeBlock;
