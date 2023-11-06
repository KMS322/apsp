import { useNavigate } from "react-router-dom";
import "../../css/myPage.css";
const MyPageS1 = () => {
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="myPage_s1">
      <div className="title_box">
        <div className="title">
          <img src="/images/myPage_s1_img1.png" />
          <p>MY페이지</p>
        </div>
      </div>
      <div className="article_container">
        <div className="article">
          <img src="/images/myPage_s1_img2.png" />
          <p>
            <span>홍길동님</span> 어서오세요.
          </p>
          <p>경북 00시 000***@n****.com</p>
          <p>회원정보 수정</p>
        </div>
      </div>
    </div>
  );
};

export default MyPageS1;
