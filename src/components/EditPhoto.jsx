import { useState } from "react";
import React from 'react'
import ClickAwayListener from "@mui/material/ClickAwayListener";

export const EditPhoto = ({ handleUpdate }) => {
  const [imageUrl, setImageUrl] = useState();

  return (
    <>
      <ClickAwayListener onClickAway={() => {console.log("vitor")}}>
        <input
          type="text"
          value={imageUrl}
          placeholder="Paste your new URL image here"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        </ClickAwayListener>
        <button
          onClick={() => {
            handleUpdate(imageUrl);
            setImageUrl("");
          }}
        >
          Send edit
        </button>
    </>
  );
};
