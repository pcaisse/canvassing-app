import Note from "~/components/note";
import { trpc } from "../utils/trpc";

export default function NewNotePage() {
  const saveNote = trpc.saveNote.useMutation();
  return (
    <div style={styles}>
      <Note note={undefined} onSave={(note) => saveNote.mutate(note)} />
    </div>
  );
}

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
