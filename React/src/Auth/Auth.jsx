import { useState } from "react";
import "./Auth.css";
import Signin from "./Signin";
import Signup from "./Signup";
const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              className="img"
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/VZpg_YkTgilrvkdxa/videoblocks-smiling-student-girl-working-on-laptop-study-online-with-internet-teacher-woman-search-for-inspiration-and-ideas-reading-news-in-social-network-using-laptop-computer-in-home-interior_hbezkgw1vi_thumbnail-1080_01.png"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                If you are learning more then you are earning more
              </span>

              <span className="text-2 text-xs">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              className="img"
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/msqd2XJ/videoblocks-funny-homeless-beggar-using-a-laptop-while-receiving-a-good-news-as-a-surprising-inheritance-or-winning-a-fortune-after-betting-online_r_lbv-y6z_thumbnail-1080_01.png"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full ">
          <div className="form-content h-full">
            <div className="login-form">
              <Signin togglePanel={togglePanel} />
            </div>

            <div className="signup-form">
              <Signup togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
