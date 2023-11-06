import React, { useState } from "react";
import "../../css/signInForm.css";
const SignInFormS2 = () => {
  const [inputValues, setInputValues] = useState([
    { name: "userName", value: "", label: "이름", type: "text" },
    {
      name: "userID",
      value: "",
      label: "아이디",
      span: "(이메일)",
      type: "password",
    },
    {
      name: "userPW",
      value: "",
      label: "비밀번호",
      span: "(8자리)",
      type: "password",
    },
    { name: "userPW2", value: "", label: "비밀번호 확인", type: "text" },
    {
      name: "userBirth",
      value: "",
      label: "생년월일",
      span: "(8자리)",
      type: "text",
    },
    { name: "userAge", value: "", label: "나이", type: "text" },
    { name: "userAdress", value: "", label: "주소", type: "text" },
    { name: "userAdressDetail", value: "", label: "상세주소", type: "text" },
    { name: "userSchool", value: "", label: "최종학교", type: "text" },
  ]);
  const [inputValues2, setInputValues2] = useState([
    { name: "careerYear", value: "", label: "년", type: "number" },
    { name: "careerMonth", value: "", label: "개월", type: "number" },
  ]);
  const handleInputChange = (event, name) => {
    const newInputValues = [...inputValues];
    const index = newInputValues.findIndex((item) => item.name === name);
    newInputValues[index].value = event.target.value;
    setInputValues(newInputValues);
  };
  const handleInputChange2 = (event, name) => {
    const newInputValues2 = [...inputValues2];
    const index = newInputValues2.findIndex((item) => item.name === name);
    newInputValues2[index].value = event.target.value;
    setInputValues2(newInputValues2);
  };
  return (
    <div className="signInForm_s2">
      <div className="form_container">
        {inputValues.map((value, index) => {
          return (
            <div className="input_box" key={index}>
              <p>
                {value.label}
                <span>{value.span ? `${value.span}` : ""}</span>
              </p>
              <input
                name={value.name}
                type={value.type}
                value={value.value}
                onChange={(event) => {
                  handleInputChange(event, value.name);
                }}
              />
            </div>
          );
        })}
        <div className="input_box">
          <p>전문인자격</p>
          <div className="select_box">
            <div className="select">공인회계</div>
            <div className="select">세무사</div>
            <div className="select">회계·세무 경력</div>
            <div className="select">기타 </div>
          </div>
        </div>
        <div className="input_box">
          <p>근무경력</p>
          <div className="box_container">
            {inputValues2.map((value, index) => {
              return (
                <div className="input_container">
                  <input
                    name={value.name}
                    type={value.type}
                    value={value.value}
                    onChange={(event) => {
                      handleInputChange2(event, value.name);
                    }}
                  />
                  <p>{value.label}</p>
                </div>
              );
            })}

            <div className="select_container">
              <div className="select">기업</div>
              <div className="select">회계사 사무</div>
              <div className="select">세무사 사무</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFormS2;
