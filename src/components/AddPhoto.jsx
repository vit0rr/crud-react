import { useState } from "react";
import { createPhoto, fetchPhotos } from "../utils/photos";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function AddPhoto({ refetchPhotos }) {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  const submit = () => {
    createPhoto(url);
    refetchPhotos(fetchPhotos());
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    try {
      new URL(url);
      submit();
      setUrl("");
    } catch (error) {
      setOpen(true);
    }
  };

  return (
    <div className="input-container">
      <TextField
        id="outlined-basic"
        label="Image URL"
        variant="outlined"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit}
      >
        Send
      </Button>{" "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something's wrong with your image's URL.
        </Alert>
      </Snackbar>
      <br />
    </div>
  );
}

export default AddPhoto;
