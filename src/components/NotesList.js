import React, { useContext, useState } from "react";
import NotePreview from "./NotePreview";
import { NoteContext } from "../App";

export default function NotesList({ notes }) {
  const [listOpen, setListOpen] = useState(true);
  const { handleAddNote } = useContext(NoteContext);

  console.log(listOpen);
  function handleToggleNotesList() {
    setListOpen(!listOpen);
  }

  function closeList() {
    setListOpen(false);
  }

  return (
    <>
      <div className={listOpen && "overlay"} onClick={closeList}></div>
      <div className={listOpen ? "notes-list" : "hide-notes-list notes-list"}>
        <div className="notes-list__add-container">
          <button
            className="button notes-list__add-container__button"
            onClick={() => {
              handleAddNote();
              setListOpen(false);
            }}
          >
            + Add a note
          </button>
        </div>
        <div className="notes-list__list-container">
          {notes.map((note, i) => (
            <NotePreview key={i} closeList={closeList} {...note} />
          ))}
        </div>
        <button
          className="notes-list__toggle-btn"
          onClick={handleToggleNotesList}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </>
  );
}
