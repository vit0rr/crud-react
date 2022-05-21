import { useState } from 'react';
import { deletePhoto, fetchPhotos, updatePhoto } from '../utils/photos';
import { Container } from './Container';
import { EditPhoto } from './EditPhoto';
import Button from '@mui/material/Button';

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
        gap: 5,
        borderRadius: 4,
        backgroundColor: '#ededef',
      }}
    >
      <img src={url} width="200px" />
      <Container direction="row" style={{ gap: 4 }}>
        <Button onClick={handleDelete} variant="contained" color="error">Delete</Button>
        {showInput ? (
          <EditPhoto
            handleUpdate={handleUpdate}
            showInput={setShowInput}
            shouldShowInput={showInput}
          />
        ) : (
          <Button onClick={handleShowInput} variant="contained">Edit</Button>
        )}
      </Container>
    </Container>
  );
};
