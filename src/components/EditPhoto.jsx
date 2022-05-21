import { useState } from 'react';

export const EditPhoto = ({ handleUpdate }) => {
  const [imageUrl, setImageUrl] = useState();
  return (
    <>
      <input
        type="text"
        value={imageUrl}
        placeholder="Paste your new URL image here"
        onChange={(e) => setImageUrl(e.target.value)}
      />
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
