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
      <button onClick={handleSubmit}>Enviar</button> <br />
      <span className="githubLink"><a href="https://github.com/vit0rr/crud-react" target={'_blank'}>GiHub Project</a></span>
    </div>
  );
}

export default AddPhoto;
