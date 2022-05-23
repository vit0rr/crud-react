import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const EditPhoto = ({ handleUpdate, showInput, shouldShowInput }) => {
  const [imageUrl, setImageUrl] = useState();

  const hideInputClickAway = () => {
    showInput(false);
  };

  if (!shouldShowInput) {
    return <></>;
  }

  return (
    <>
      <ClickAwayListener onClickAway={hideInputClickAway}>
        <TextField
          id="outlined-basic"
          label="Paste your new URL image here"
          variant="outlined"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </ClickAwayListener>
      <Button
        variant="contained"
        color="success"
        style={{ margin: "10px" }}
        onClick={() => {
          if (new URL(url)) {
            handleUpdate(imageUrl);
            setImageUrl("");
          } else {
            throw new Error("Invalid URL");
          }
        }}
      >
        Send edit
      </Button>
    </>
  );
};
