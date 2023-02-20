import Link from "next/link";
import { CSSProperties } from "react";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const result = trpc.allNotes.useQuery();

  if (!result.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      <div style={{ display: "flex" }}>
        <h1>{result.data.length} notes found.</h1>
      </div>
      <div style={{ display: "flex" }}>
        <Link href="new">
          <button>Create new note</button>
        </Link>
      </div>
    </div>
  );
}

const styles: CSSProperties = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
