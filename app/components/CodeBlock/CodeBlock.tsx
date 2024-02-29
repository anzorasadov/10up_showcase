"use client";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
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
  useEffect(() => Prism.highlightAll(), []);

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
      <div className={`${styles.colapseContainer} ${isCollapsed ? styles.collapsed : styles.expanded}`}>{highlitedCode}</div>
    </div>
  ) : (
    highlitedCode
  );
};

export default CodeBlock;
