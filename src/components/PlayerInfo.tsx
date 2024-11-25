import React, { useState } from "react";

const PlayerInfo = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setEditedName(e.target.value);
  };
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input required value={editedName} onChange={handleChange} />
        ) : (
          <span className="player-name">{editedName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default PlayerInfo;
