import { CSSProperties, ReactElement } from "react";

const styles: CSSProperties = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

export default function IndexPage({ children }: { children: ReactElement }) {
  return <div style={styles}>{children}</div>;
}
