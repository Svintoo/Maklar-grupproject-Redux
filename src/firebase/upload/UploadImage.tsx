import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../main";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setUrl(url);
          console.log("Image URL: ", url);
        });
      });
    } else {
      alert("Please choose an image first.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
}

export default UploadImage;
