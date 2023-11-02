import "../css/header.css";
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
            goPage("/mypage");
          }}
        >
          MY페이지
        </li>
        <li
          onClick={() => {
            goPage("/login");
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
    </div>
  );
};

export default Header;
