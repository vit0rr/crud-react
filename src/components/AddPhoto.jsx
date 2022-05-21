import { useState } from 'react';
import { createPhoto, fetchPhotos } from '../utils/photos';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHub from './GitHub'

function AddPhoto({ refetchPhotos }) {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    createPhoto(url);
    refetchPhotos(fetchPhotos());
  };

  return (
    <div className="input-container">
      <TextField id="outlined-basic" label="Image URL" variant="outlined" value={url} onChange={(e) => {
          setUrl(e.target.value);
        }}/> 
        <br/> <br/>
        <GitHub/> <br/><br/>
      <Button variant="contained" color="success" onClick={handleSubmit}>Send</Button> <br />
    </div>
  );
}

export default AddPhoto;
