import { MdCheck } from "react-icons/md";
import BtnMedIcon2 from "../Buttons/BtnMedIkon2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main";
import { Review } from "../../interfaces/Review";
import { useEffect, useState } from "react";
import BtnSvart from "../Buttons/BtnSvart";

interface WriteReviewProps {
  handleCloseForm: () => void;
}

const WriteReview = ({ handleCloseForm }: WriteReviewProps) => {
  const initialState: Omit<Review, "id"> = {
    name: "",
    content: "",
    rating: 5,
  };
  const [review, setReview] = useState<Omit<Review, "id">>(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      return;
    } else {
      setError(null);
    }

    try {
      await addDoc(collection(db, "recensioner"), review);
      console.log("Successfully added!");
      setError(null);
      handleCloseForm();
    } catch (error) {
      console.error(error);
      console.log("Ett fel inträffade vid sparandet.");
    }
  };

  return (
    <div className="write_review_container">
      <h2>Skriv din recension</h2>
      <div className="review_item">
        <div>
          <input
            className="author_name"
            placeholder="Your name"
            name="name"
            onChange={handleInputChange}
          ></input>
          <input
            className="set_user_rating"
            placeholder="5"
            onChange={handleInputChange}
            name="rating"
            type="number"
            min="1"
            max="5"
          ></input>
          <span>/5</span>
        </div>
        <div className="write_content_container">
          <input
            className="write_review_text"
            placeholder="Write your review here"
            name="content"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="review_btn_container">
          <BtnMedIcon2
            type="submit"
            title=""
            onClick={handleSave}
            className="review-btn"
            icon={<MdCheck style={{ color: "green" }} />}
          ></BtnMedIcon2>
          <BtnSvart title="avbryt" onClick={handleCloseForm}></BtnSvart>
        </div>
      </div>
    </div>
  );
};
export default WriteReview;
