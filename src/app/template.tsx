"use client";

import styles from "./template.module.scss";

const RootTemplate: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};

export default RootTemplate;
