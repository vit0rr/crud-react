import { useState } from "react";
import AddPhoto from "./components/AddPhoto";

function App() {
  const [urls, setUrls] = useState(localStorage.getItem("url") ? JSON.parse(localStorage.getItem("url")) : []);


  function handleDelete(idx) {
    const newUrls = urls.filter((url, index) => index !== idx);
    console.log(idx)
    setUrls(newUrls);
    localStorage.setItem("url", JSON.stringify(newUrls));
  }

  function handleUpdate(index, newUrl) {
    const newUrls = urls.map((url, idx) => {
      if (idx === index) {
        return newUrl;
      }
      return url;
    })
    setUrls(newUrls);
    localStorage.setItem("url", JSON.stringify(newUrls));
  }

  return (
    <div>
      <AddPhoto vitor={setUrls}/>
      {urls.map((url, index) => (
        <>
        <br/>
        <button onClick={() => {handleDelete(index)}}>Delete</button>
        <button onClick={() => {handleUpdate(index)}}>Edit</button>
        <img src={url} key={index} width="300px" />
        </>
      ))}
    </div>
  );
}

export default App;
