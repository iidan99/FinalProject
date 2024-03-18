import LoginForm from "../../components/LogInForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import "./PopUpModal.scss";

const PopUpModal = ({ setOpenModal, activeTab }: any) => {
  return (
    <div className="popup_container">
      <div className="popup_container-content">
        <div className="popup_container-content-header">
          <div
            className="popup_container-content--X"
            onClick={() => setOpenModal(false)}
          >
            <div className="popup_container-content--X-left"></div>
            <div className="popup_container-content--X-right"></div>
          </div>
          <h2>{activeTab === "login" ? "Login" : "Register"}</h2>
        </div>
        <div className="popup_container-content-tabs"></div>
        <div className="popup_container-content-form">
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
