import { useState } from 'react';
import { deletePhoto, fetchPhotos, updatePhoto } from '../utils/photos';
import { Container } from './Container';
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
    <Container
      style={{
        padding: 10,
        backgroundColor: '#121212',
        gap: 5,
        borderRadius: 8,
      }}
    >
      <img src={url} width="200px" />
      <Container direction="row" style={{ gap: 4 }}>
        <button onClick={handleDelete}>Delete</button>
        {showInput ? (
          <EditPhoto
            handleUpdate={handleUpdate}
            showInput={setShowInput}
            shouldShowInput={showInput}
          />
        ) : (
          <button onClick={handleShowInput}>Edit</button>
        )}
      </Container>
    </Container>
  );
};
