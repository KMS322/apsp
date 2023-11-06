import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/logIn.css";
const LogInComponent = () => {
  const navigate = useNavigate();
  const [inputID, setInputID] = useState();
  const [inputPW, setInputPW] = useState();
  const [checkID, setCheckID] = useState(true);
  const [checkLogin, setCheckLogin] = useState(false);
  const [userType, setUserType] = useState(true); // true : private
  const handleInputID = (event) => {
    setInputID(event.target.value);
  };
  const handleInputPW = (event) => {
    setInputPW(event.target.value);
  };
  const handleSubmit = () => {
    console.log(inputID);
    console.log(inputPW);
  };
  const handleCheck1 = () => {
    setCheckID(!checkID);
  };
  const handleCheck2 = () => {
    setCheckLogin(!checkLogin);
  };
  const handleUserType = (value) => {
    setUserType(value);
  };
  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="logIn_s1">
      <div className="section_container">
        <div className="login_container">
          <div className="text_tab">
            <p
              className={userType === true ? "active" : ""}
              onClick={() => {
                handleUserType(true);
              }}
            >
              개인회원
            </p>
            <p
              className={userType === false ? "active" : ""}
              onClick={() => {
                handleUserType(false);
              }}
            >
              기업회원
            </p>
          </div>
          <div className="input_container">
            <div className="input_text_box">
              <div className="input_text">
                <p>아이디</p>
                <input type="text" value={inputID} onChange={handleInputID} />
              </div>
              <div className="input_text">
                <p>비밀번호</p>
                <input
                  type="password"
                  value={inputPW}
                  onChange={handleInputPW}
                />
              </div>
            </div>
            <div className="input_submit_btn" onClick={handleSubmit}>
              로그인
            </div>
          </div>
          <div className="check_box_container">
            <div className="article">
              <div
                className="check"
                onClick={handleCheck1}
                style={{ backgroundColor: checkID ? "#979797" : "white" }}
              ></div>
              <p>아이디 저장</p>
            </div>
            <div className="article">
              <div
                className="check"
                onClick={handleCheck2}
                style={{ backgroundColor: checkLogin ? "#979797" : "white" }}
              ></div>
              <p>로그인 유지</p>
            </div>
          </div>
          <div className="text_btn_container">
            <p>아이디 / 비밀번호 찾기</p>
            <p
              onClick={() => {
                goPage("/signIn");
              }}
            >
              회원가입
            </p>
          </div>
        </div>
        <div className="ad_box">
          <img src="/images/logIn_s1_img.jpg" alt="" />
        </div>
      </div>
      <p>© 2023 회전문</p>
    </div>
  );
};

export default LogInComponent;
