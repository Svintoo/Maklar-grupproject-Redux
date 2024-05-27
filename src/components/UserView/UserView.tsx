import GetInTouch from "../GetInTouch/GetInTouch";
import ContactForm from "../ContactForm/ContactForm";
import AnyQuestions from "../AnyQuestions/AnyQuestions";
import "./styles.css";

const UserView = () => {
  return (
    <div className="user_view_container">
      <AnyQuestions phoneNumber={""} email={""} />
      <GetInTouch />
      <ContactForm />
    </div>
  );
};

export default UserView;
