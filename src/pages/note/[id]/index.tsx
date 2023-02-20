import { useRouter } from "next/router";
import Note from "~/components/note";
import { trpc } from "~/utils/trpc";

export default function NotePage() {
  const router = useRouter();
  const id =
    router.query.id !== undefined
      ? parseInt(router.query.id as string, 10)
      : undefined;
  const note = id ? trpc.getNote.useQuery({ id }).data : undefined;
  const saveNote = trpc.saveNote.useMutation({
    onSuccess: () => router.push("/"),
  });
  return (
    <>
      <Note
        key={note?.id}
        note={note}
        onSave={(note) => saveNote.mutate(note)}
      />
      {saveNote.error?.message && (
        <pre style={{ display: "flex", color: "red" }}>
          All fields are required
        </pre>
      )}
    </>
  );
}
