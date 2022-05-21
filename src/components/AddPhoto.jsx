import { useState } from 'react';
import { createPhoto, fetchPhotos } from '../utils/photos';

function AddPhoto({ refetchPhotos }) {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    createPhoto(url);
    refetchPhotos(fetchPhotos());
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default AddPhoto;
