import { useState } from "react";

function AddPhoto({vitor}) {
  const [url, setUrl] = useState("");

    function handleSubmit() {
        const previewValues = localStorage.getItem("url") ? JSON.parse(localStorage.getItem("url")) : [];
        const newPhotos = previewValues.concat(url)
        localStorage.setItem("url", JSON.stringify(newPhotos));
        vitor(newPhotos);
    }

    console.log(vitor);
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
