import "../css/header.css";
import "../css/header_mobile.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="header">
      <img
        src="/images/logo.png"
        alt=""
        onClick={() => {
          goPage("/");
        }}
      />
      <ul>
        <li
          onClick={() => {
            goPage("/myPage");
          }}
        >
          MY페이지
        </li>
        <li
          onClick={() => {
            goPage("/logIn");
          }}
        >
          로그인
        </li>
        <li
          onClick={() => {
            goPage("/signin");
          }}
        >
          회원가입
        </li>
      </ul>
      <div className="img_box mobile">
        <img src="/images/m_header_icon.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
