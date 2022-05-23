import { useState, useEffect } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const EditPhoto = ({ handleUpdate, showInput, shouldShowInput }) => {
  const [imageUrl, setImageUrl] = useState();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

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
    showInput(true);
  }

  const verifyIfImageUrlIsValid = () => {
    try {
      new URL(imageUrl);
      handleUpdate(imageUrl);
      setImageUrl("");
    } catch (error) {
      console.log(error);
      setOpen(true);
      setError("Invalid url");
    }
  };

  return (
    <div>
      <ClickAwayListener onClickAway={hideInputClickAway}>
        <div>
          <TextField
            id="outlined-basic"
            label="Paste your new URL image here"
            variant="outlined"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            style={{ margin: "10px" }}
            onClick={verifyIfImageUrlIsValid}
          >
            Send edit
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Something's wrong with your image's URL.
            </Alert>
          </Snackbar>
        </div>
      </ClickAwayListener>
    </div>
  );
};
