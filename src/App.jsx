import { useEffect, useState } from 'react';
import AddPhoto from './components/AddPhoto';
import { Photo } from './components/Photo';
import { fetchPhotos } from './utils/photos';

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const photos = fetchPhotos();
    setUrls(photos);
  }, []);

  return (
    <div>
      <AddPhoto refetchPhotos={setUrls} />
      {urls?.map((url, index) => (
        <Photo key={index} index={index} url={url} refetchPhotos={setUrls} />
      ))}
    </div>
  );
}

export default App;
