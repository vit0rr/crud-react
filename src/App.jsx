import { useEffect, useState } from 'react';
import AddPhoto from './components/AddPhoto';
import { Container } from './components/Container';
import { Photo } from './components/Photo';
import { fetchPhotos } from './utils/photos';
import './styles.css'

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const photos = fetchPhotos();
    setUrls(photos);
  }, []);

  return (
    <>
    <Container>
      <AddPhoto refetchPhotos={setUrls} />
      <Container
        direction="row"
        style={{
          gap: 25,
          flexWrap: 'wrap',
        }}
      >
        {urls?.map((url, index) => (
          <Photo key={index} index={index} url={url} refetchPhotos={setUrls} />
        ))}
      </Container>
    </Container>
    </>
  );
}

export default App;
