import { useRouter } from "next/router";
import Note from "~/components/note";
import { trpc } from "~/utils/trpc";

export default function NotePage() {
  const router = useRouter();
  const id =
    router.query.id !== undefined ? Number(router.query.id) : undefined;
  const note = id ? trpc.getNote.useQuery({ id }).data : undefined;
  const saveNote = trpc.saveNote.useMutation();
  return (
    <div style={styles}>
      <Note note={note} onSave={(note) => saveNote.mutate(note)} />
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
