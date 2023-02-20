import Link from "next/link";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const result = trpc.allNotes.useQuery();

  if (!result.data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
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
                <span
                  style={{
                    display: "inline-block",
                    textOverflow: "ellipsis",
                    width: 300,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  Note {note.id} ({note.name} - {note.note})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <Link href="/note/new">
          <button>Create new note</button>
        </Link>
      </div>
    </>
  );
}
