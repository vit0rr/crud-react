import { useState } from 'react';
import { deletePhoto, fetchPhotos, updatePhoto } from '../utils/photos';
import { EditPhoto } from './EditPhoto';

export const Photo = ({ index, url, refetchPhotos }) => {
  const [showInput, setShowInput] = useState(false);

  const handleDelete = () => {
    deletePhoto(index);
    refetchPhotos(fetchPhotos());
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  const handleUpdate = (imageUrl) => {
    updatePhoto(index, imageUrl);
    refetchPhotos(fetchPhotos());
    setShowInput(false);
  };

  return (
    <>
      <br />
      <button onClick={handleDelete}>Delete</button>
      {showInput ? (
        <EditPhoto handleUpdate={handleUpdate} />
      ) : (
        <button onClick={handleShowInput}>Edit</button>
      )}

      <img src={url} width="300px" />
    </>
  );
};
