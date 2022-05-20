import { useState } from "react";
import AddPhoto from "./components/AddPhoto";

function App() {
  const [urls, setUrls] = useState(localStorage.getItem("url") ? JSON.parse(localStorage.getItem("url")) : []);
  const [showInput, setShowInput] = useState(false);
  const [imageUrl, setImageUrl] = useState("");


  function handleDelete(idx) {
    const newUrls = urls.filter((url, index) => index !== idx);
    console.log(idx)
    setUrls(newUrls);
    localStorage.setItem("url", JSON.stringify(newUrls));
  }

  function handleShowInput() {
    setShowInput(true);

  }

  function handleUpdate(index){
    const newUrls = urls.map((url, idx) => {
      if (idx === index) {
        return imageUrl;
      }
      return url;
    })
    setUrls(newUrls);
    localStorage.setItem("url", JSON.stringify(newUrls));
    setImageUrl("");
    setShowInput(false);
  }

  return (
    <div>
      <AddPhoto vitor={setUrls}/>
      {urls.map((url, index) => (
        <>
        <br/>
        <button onClick={() => {handleDelete(index)}}>Delete</button>
        {!showInput ? <button onClick={handleShowInput}>Edit</button> : (
          <>
          <input type="text" value={imageUrl} placeholder="Paste your new URL image here" onChange={(e) => setImageUrl(e.target.value)} />
          <button onClick={() => handleUpdate(index)}>Send edit</button>
          </>

        )}
        <img src={url} key={index} width="300px" />
        </>
      ))}
    </div>
  );
}

export default App;
