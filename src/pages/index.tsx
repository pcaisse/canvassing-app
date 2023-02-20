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
        <ul>
          {result.data.map((note) => (
            <li key={note.id}>
              <Link
                href={{
                  pathname: "/note/[id]",
                  query: { id: note.id },
                }}
              >
                Note {note.id} ({note.name} - {note.note})
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <Link href="note">
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
