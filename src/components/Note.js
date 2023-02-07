import React, { useContext } from "react";
import moment from "moment";

import { NoteContext } from "../App";

export default function Note({ title, date, body, id }) {
  const { handleEditNote, handleRemoveNote, handleEditNoteTitle } =
    useContext(NoteContext);

  return (
    <div className="note-container">
      <div className="note">
        <div className="note__options">
          <button
            className="button note__options__button"
            onClick={() => handleRemoveNote(id)}
          >
            Remove
          </button>
        </div>
        <div className="note__content">
          <header className="note__header">
            <input
              value={title}
              placeholder="Title..."
              onChange={({ target }) => handleEditNoteTitle(id, target.value)}
            />
            <p>{moment(date).format("MMM D, 'YY")}</p>
          </header>
          <textarea
            placeholder="Write your note here..."
            className="note__body"
            onChange={({ target }) => handleEditNote(id, target.value)}
            cols="100"
            rows="100"
            value={body}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
