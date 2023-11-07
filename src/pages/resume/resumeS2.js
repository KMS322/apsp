import React, { useState } from "react";
import "../../css/resume.css";
const ResumeS2 = () => {
  const [inputValues1, setInputValues1] = useState([
    { name: "title", value: "", type: "text" },
  ]);
  const [inputValues2, setInputValues2] = useState([
    { name: "schoolName", value: "", type: "text", placeholder: "학교명" },
    {
      name: "schoolGraduation",
      value: "",
      type: "text",
      placeholder: "졸업여부",
    },
  ]);
  const [inputValues3, setInputValues3] = useState([
    { name: "companyName", value: "", type: "text" },
  ]);
  const [inputValues4, setInputValues4] = useState([
    { name: "workYear", value: "", label: "년", type: "number" },
    { name: "workMonth", value: "", label: "개월", type: "number" },
  ]);
  const [inputValues5, setInputValues5] = useState([
    { name: "careerDescription", value: "" },
  ]);
  const [inputValues6, setInputValues6] = useState([
    { name: "introTitle", value: "", type: "text" },
  ]);
  const [inputValues7, setInputValues7] = useState([
    { name: "introContent", value: "", type: "text" },
  ]);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const options1 = ["기업", "회계사 사무", "세무사 사무"];
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const options2 = ["제조업", "도소매"];

  const [checkState1, setCheckState1] = useState(true); // true : 개인, false : 법인

  const handleInputChange1 = (event) => {
    const newValue1 = event.target.value;
    setInputValues1((prev) => [...prev, { value: newValue1 }]);
  };
  const handleInputChange2 = (event, name) => {
    const newInputValues2 = [...inputValues2];
    const index = newInputValues2.findIndex((item) => item.name === name);
    newInputValues2[index].value = event.target.value;
    setInputValues2(newInputValues2);
  };
  const handleInputChange3 = (event) => {
    const newValue3 = event.target.value;
    setInputValues3((prev) => [...prev, { value: newValue3 }]);
  };
  const handleInputChange4 = (event, name) => {
    const newInputValues4 = [...inputValues4];
    const index = newInputValues4.findIndex((item) => item.name === name);
    newInputValues4[index].value = event.target.value;
    setInputValues4(newInputValues4);
  };
  const handleInputChange5 = (event) => {
    const newValue5 = event.target.value;
    setInputValues5((prev) => [...prev, { value: newValue5 }]);
  };
  const handleInputChange6 = (event) => {
    const newValue6 = event.target.value;
    setInputValues6((prev) => [...prev, { value: newValue6 }]);
  };
  const handleInputChange7 = (event) => {
    const newValue7 = event.target.value;
    setInputValues7((prev) => [...prev, { value: newValue7 }]);
  };
  const toggleOption1 = (option) => {
    if (selectedOptions1.includes(option)) {
      setSelectedOptions1(
        selectedOptions1.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      if (selectedOptions1.length < 3) {
        setSelectedOptions1([...selectedOptions1, option]);
      }
    }
  };
  const toggleOption2 = (option) => {
    if (selectedOptions2.includes(option)) {
      setSelectedOptions2(
        selectedOptions2.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      if (selectedOptions2.length < 2) {
        setSelectedOptions2([...selectedOptions2, option]);
      }
    }
  };
  const changeState1 = () => {
    setCheckState1(!checkState1);
  };
  return (
    <div className="resume_s2">
      <div className="article_container">
        <div className="article1">
          <p>이력서 제목</p>
          <div className="input_box">
            <input
              name={inputValues1.name}
              value={inputValues1.value}
              onChange={(event) => {
                handleInputChange1(event);
              }}
            />
          </div>
        </div>
        <div className="article2">
          <p>학력사항</p>
          <div className="input_box">
            <p>최종학력</p>
            {inputValues2.map((value, index) => {
              return (
                <input
                  key={index}
                  name={value.name}
                  type={value.type}
                  value={value.value}
                  placeholder={value.placeholder}
                  onChange={(event) => {
                    handleInputChange2(event, value.name);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="article3">
          <div className="title_box">
            <p>경력</p>
            <div className="title_btn">신입</div>
            <div className="title_btn">경력</div>
          </div>
          <div className="input_box_container">
            <div className="input_box">
              <p>업체명</p>
              <input
                name={inputValues3.name}
                type={inputValues3.type}
                value={inputValues3.value}
                onChange={(event) => {
                  handleInputChange3(event);
                }}
              />
            </div>
            <div className="input_box">
              <p>근무경력</p>
              {inputValues4.map((value, index) => {
                return (
                  <>
                    <input
                      name={value.name}
                      type={value.type}
                      value={value.value}
                      onChange={(event) => {
                        handleInputChange4(event);
                      }}
                    />
                    <p>{value.label}</p>
                  </>
                );
              })}
              {options1.map((option, index) => {
                return (
                  <div
                    className={
                      selectedOptions1.includes(option)
                        ? "input_btn selected"
                        : "input_btn"
                    }
                    key={index}
                    onClick={() => {
                      toggleOption1(option);
                    }}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
            <div className="input_box">
              <p>사업장 형태</p>
              <img
                src={
                  checkState1 === true
                    ? "/images/signInForm_s1_img2.png"
                    : "/images/signInForm_s1_img1.png"
                }
                onClick={changeState1}
              />
              <p style={{ color: checkState1 === true ? "#2196F3" : "" }}>
                개인
              </p>
              <img
                src={
                  checkState1 === false
                    ? "/images/signInForm_s1_img2.png"
                    : "/images/signInForm_s1_img1.png"
                }
                onClick={changeState1}
              />
              <p style={{ color: checkState1 === false ? "#2196F3" : "" }}>
                법인
              </p>
              <p>업태</p>
              {options2.map((option, index) => {
                return (
                  <div
                    className={
                      selectedOptions2.includes(option)
                        ? "input_btn selected"
                        : "input_btn"
                    }
                    key={index}
                    onClick={() => {
                      toggleOption2(option);
                    }}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text_box">
            <p>경력기술서</p>
            <textarea
              name={inputValues5.name}
              value={inputValues5.value}
              onChange={(event) => {
                handleInputChange5(event);
              }}
            />
          </div>
        </div>

        <div className="article4">
          <p>자기소개서</p>
          <div className="title_box">
            <p>제목</p>
            <input
              name={inputValues6.name}
              type={inputValues6.type}
              value={inputValues6.value}
              onChange={(event) => {
                handleInputChange6(event);
              }}
            />
          </div>
          <textarea
            name={inputValues7.name}
            type={inputValues7.type}
            value={inputValues7.value}
            onChange={(event) => {
              handleInputChange5(event);
            }}
          />
        </div>
        <div className="article5">
          <div className="btn">취소</div>
          <div className="btn">저장</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeS2;
