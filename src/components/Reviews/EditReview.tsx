import { MdCheck, MdDeleteForever } from "react-icons/md";
import BtnMedIcon2 from "../Buttons/BtnMedIkon2";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../main";
import { Review } from "../../interfaces/Review";
import { useState } from "react";
import BtnSvart from "../Buttons/BtnSvart";

interface EditReviewProps {
  object: Review;
  handleCloseForm: () => void;
}

const EditReview = ({ object, handleCloseForm }: EditReviewProps) => {
  const initialState: Omit<Review, "id"> = {
    name: object.name,
    content: object.content,
    rating: object.rating,
  };
  const [review, setReview] = useState<Omit<Review, "id">>(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: name === "rating" ? Math.min(parseInt(value), 5) : value,
    }));
  };

  const handleSave = async () => {
    if (!review.name || !review.content || !review.rating) {
      setError("Vänligen fyll i alla obligatoriska fält !");
      console.log(error);
    } else {
      setError(null);
    }
    try {
      const selectCollection = collection(db, "recensioner");
      const docRef = doc(selectCollection, object.id);
      await updateDoc(docRef, review);
      console.log("Recension uppdaterad!");
      handleCloseForm();
    } catch (error) {
      console.error(error);
      console.log("Ett fel inträffade vid sparandet.");
    }
  };
  const handleDelete = async () => {
    try {
      const selectCollection = collection(db, "recensioner");
      const docRef = doc(selectCollection, object.id);
      await deleteDoc(docRef);
      console.log("Recension borttagen!");
      handleCloseForm();
    } catch (error) {
      console.error(error);
      console.log("Ett fel inträffade vid borttagandet.");
    }
  };

  return (
    <div className="write_review_container">
      <h2>Redigera Recension</h2>
      <div className="review_item">
        <div>
          <input
            className="author_name"
            defaultValue={object.name}
            name="name"
            onChange={handleInputChange}
          ></input>
          <input
            className="set_user_rating"
            defaultValue={object.rating}
            onChange={handleInputChange}
            name="rating"
            type="number"
            min="1"
            max="5"
          ></input>
          <span> rating</span>
        </div>
        <div className="write_content_container">
          <textarea
            className="write_review_text"
            placeholder="Write your review here"
            name="content"
            defaultValue={object.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="review_btn_container">
          <BtnMedIcon2
            type="submit"
            title=""
            onClick={handleSave}
            className="review-btn"
            icon={<MdCheck style={{ color: "green" }} />}
          ></BtnMedIcon2>
          <BtnMedIcon2
            title=""
            className="delete-btn"
            onClick={handleDelete}
            icon={<MdDeleteForever style={{ color: "black" }} />}
          ></BtnMedIcon2>
          <BtnSvart title="avbryt" onClick={handleCloseForm}></BtnSvart>
        </div>
      </div>
    </div>
  );
};
export default EditReview;
