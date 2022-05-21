export const fetchPhotos = () =>
  localStorage.getItem('url') ? JSON.parse(localStorage.getItem('url')) : [];

export const createPhoto = (url) => {
  const previousPhotos = fetchPhotos();
  localStorage.setItem('url', JSON.stringify(previousPhotos.concat(url)));
};

export const deletePhoto = (indexToDelete) => {
  const photos = fetchPhotos();
  const newUrls = photos.filter((_, index) => index !== indexToDelete);
  localStorage.setItem('url', JSON.stringify(newUrls));
};

export const updatePhoto = (indexToUpdate, value) => {
  const photos = fetchPhotos();
  const newUrls = photos.map((url, idx) => {
    if (idx === indexToUpdate) {
      return value;
    }
    return url;
  });
  localStorage.setItem('url', JSON.stringify(newUrls));
};
