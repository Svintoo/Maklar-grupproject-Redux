import { MdComment } from "react-icons/md";
import BtnMedIcon2 from "../Buttons/BtnMedIkon2";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../main";
import { Review } from "../../interfaces/Review";
import { useContext, useEffect, useState } from "react";
import WriteReview from "./WriteReview";
import BtnSvart from "../Buttons/BtnSvart";
import { AuthContext } from "../Context/AuthContext";
import EditReview from "./EditReview";

const Reviews = () => {
  const authContext = useContext(AuthContext);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [write, setWrite] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { isLogged } = authContext;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "recensioner"),
      (snapshot) => {
        const reviewList = snapshot.docs.map((doc) => ({
          ...(doc.data() as Review),
          id: doc.id,
        }));
        setReviews(reviewList);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleOpenWrite = () => {
    setWrite(true);
  };
  const handleOpenEdit = (index: number) => {
    setIndex(index);
    setEdit(true);
  };
  const handleClose = () => {
    setWrite(false);
    setEdit(false);
    setIndex(0);
  };

  const scrollIndex = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
    console.log(index);
  };
  const review = reviews[index];

  return (
    <div className="review_container">
      <h2 className="recensioner_header">Recensioner</h2>
      {write && <WriteReview handleCloseForm={handleClose}></WriteReview>}
      {edit && (
        <EditReview
          object={{
            name: reviews[index]?.name,
            content: reviews[index]?.content,
            rating: reviews[index]?.rating,
            id: reviews[index]?.id,
          }}
          handleCloseForm={handleClose}
        ></EditReview>
      )}
      {review ? (
        <div key={review.id} className="review_item">
          <div className="review_header_container">
            <div className="user_icon"></div>
            <p className="author_name">{review.name}</p>
            <p className="user_rating"> rated {review.rating}/5</p>
          </div>
          <div className="review_content_container">
            <p>{review.content}</p>
          </div>
          <div className="review_btn_container">
            {!isLogged && (
              <BtnMedIcon2
                type="button"
                title=""
                onClick={handleOpenWrite}
                className="review-btn"
                icon={<MdComment style={{ color: "green" }} />}
              ></BtnMedIcon2>
            )}
            {isLogged && (
              <BtnMedIcon2
                type="button"
                title="Edit"
                className="review-btn"
                onClick={() => handleOpenEdit(index)}
              ></BtnMedIcon2>
            )}
            <BtnSvart onClick={scrollIndex} title="Next"></BtnSvart>
          </div>
        </div>
      ) : (
        <p>Loading reviews...</p>
      )}
    </div>
  ); //fix the button
};
export default Reviews;
