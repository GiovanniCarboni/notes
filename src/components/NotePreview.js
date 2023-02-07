import React, { useContext } from "react";
import moment from "moment";
import { NoteContext } from "../App";

export default function NotePreview({ title, date, body, id, closeList }) {
  const { handleChangeNote } = useContext(NoteContext);
  return (
    <div
      className="note-preview"
      onClick={() => {
        handleChangeNote(id);
        closeList();
      }}
    >
      <header className="note-preview__header">
        <h3>{title}</h3>
        <p>{moment(date).format("DD/MM/YY")}</p>
      </header>
      <p className="note-preview__body-preview">{body.slice(0, 100)} ...</p>
    </div>
  );
}
