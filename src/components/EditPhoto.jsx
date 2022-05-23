import { useState, useEffect } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const EditPhoto = ({ handleUpdate, showInput, shouldShowInput }) => {
  const [imageUrl, setImageUrl] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const hideInputClickAway = () => {
    showInput(false);
  };

  if (!shouldShowInput) {
    return <></>;
  }

  const verifyIfImageUrlIsValid = () => {
    try {
      new URL(imageUrl);
      handleUpdate(imageUrl);
      setImageUrl("");
    } catch (error) {
      <span>Heelo my friend</span>;
      console.log(error);
    }
  };

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
        onClick={verifyIfImageUrlIsValid}
      >
        Send edit
      </Button>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          This is a error message!
        </Alert>
      </Snackbar>
    </>
  );
};
