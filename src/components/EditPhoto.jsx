import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
// import { fetchPhotos } from '../utils/photos';

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
          setImageUrl('');
        }}
      >
        Send edit
      </button>
    </>
  );
};
