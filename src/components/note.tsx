import { Note as NoteModel } from "@prisma/client";
import { CSSProperties, useState } from "react";
import { SaveNoteData } from "~/pages/api/trpc/data";

export default function Note({
  note,
  onSave,
}: {
  note: NoteModel | undefined;
  onSave: (note: SaveNoteData) => void;
}): React.ReactElement {
  const [noteData, setNoteData] = useState<SaveNoteData>(
    note || { name: "", note: "" }
  );
  return (
    <div style={styles}>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Person's name"
          value={note?.name}
          onChange={(event) =>
            setNoteData({ ...noteData, name: event.currentTarget.value })
          }
        />
      </div>
      <div style={{ display: "flex" }}>
        <textarea value={note?.note} placeholder="Notes on interaction" />
      </div>
      <button onClick={() => onSave(noteData)}>Save</button>
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
