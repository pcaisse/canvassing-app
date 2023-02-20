import { Note as NoteModel } from "@prisma/client";
import { CSSProperties, useState } from "react";
import { SaveNoteData } from "~/pages/api/trpc/data";

export default function Note({
  note,
  onSave,
}: {
  note: NoteModel | null | undefined;
  onSave: (note: SaveNoteData) => void;
}): React.ReactElement {
  const [noteData, setNoteData] = useState<SaveNoteData>({
    id: note?.id,
    name: note?.name || "",
    note: note?.note || "",
    createdAt: note?.createdAt,
    updatedAt: note?.updatedAt,
  });
  return (
    <>
      <div style={{ display: "flex" }}>
        <h2>{note ? "Saved Note" : "New Note"}</h2>
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Person's name"
          defaultValue={note?.name}
          onChange={(event) =>
            setNoteData({ ...noteData, name: event.currentTarget.value })
          }
        />
      </div>
      <div style={{ display: "flex" }}>
        <textarea
          placeholder="Notes on interaction"
          defaultValue={note?.note}
          onChange={(event) =>
            setNoteData({ ...noteData, note: event.currentTarget.value })
          }
        />
      </div>
      <button onClick={() => onSave(noteData)}>Save</button>
    </>
  );
}
