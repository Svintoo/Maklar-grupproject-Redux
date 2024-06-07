import GetInTouch from "../GetInTouch/GetInTouch";
import ContactForm from "../ContactForm/ContactForm";
import AnyQuestions from "../AnyQuestions/AnyQuestions";
import "./styles.css";
import Reviews from "../Reviews/Reviews";

const UserView = () => {
  return (
    <div className="user_view_container container">
      <AnyQuestions phoneNumber={""} email={""} />
      <Reviews/>
      <div className="contact-wrapper ">
        <GetInTouch />
        <ContactForm />
      </div>
    </div>
  );
};

export default UserView;
