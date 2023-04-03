import React, { useContext, useState } from "react";
import { PlaylistContext } from "../../../context/PlaylistContext";

const Notes = ({ videoId }) => {
  const { addNote, getNote } = useContext(PlaylistContext);

  const [note, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(videoId, note);
    setNote("");
  };

  return (
    <div>
      <h2>Notes</h2>
      <p> {getNote(videoId)} </p>
      <form onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Add note"
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default Notes;
