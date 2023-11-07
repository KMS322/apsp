import React, { useState } from "react";
import "../../css/resume.css";
const ResumeS3 = () => {
  const [inputValues1, setInputValues1] = useState([
    { name: "hopeMonth", value: "", label: "개월", type: "number" },
    { name: "hopeWeek", value: "", label: "주", type: "number" },
    { name: "hopeDay", value: "", label: "일", type: "number" },
  ]);
  const [inputValues2, setInputValues2] = useState([
    { name: "pay", value: "", type: "text" },
  ]);
  const [checkState1, setCheckState1] = useState(true); // true : 재택, false : 출근

  const handleInputChange1 = (event, name) => {
    const newInputValues1 = [...inputValues1];
    const index = newInputValues1.findIndex((item) => item.name === name);
    newInputValues1[index].value = event.target.value;
    setInputValues1(newInputValues1);
  };
  const changeState1 = () => {
    setCheckState1(!checkState1);
  };
  const handleInputChange2 = (event) => {
    const newValue2 = event.target.value;
    setInputValues2((prev) => [...prev, { value: newValue2 }]);
  };
  return (
    <div className="resume_s3">
      <div className="line_box"></div>
      <div className="article_container">
        <div className="article1">
          <div className="text_box">
            <p>
              <span>홍길동</span>님, 기업으로부터 제안을 받으시겠습니까?
            </p>
            <p>
              이력서가 공개되며, 기업으로부터 제의를 받을 수 있습니다.
              <br />
              제안을 받을 경우, 수락하기 전까지 채용담당자에게 연락처가 공개되지
              않습니다.
            </p>
          </div>
          <div className="btn_box">
            <div className="btn">아니요</div>
            <div className="btn">예</div>
          </div>
        </div>
        <div className="article2">
          <div className="input_box_container">
            <div className="input_box">
              <p>희망 근무기간</p>
              <div className="input_box_container_01">
                {inputValues1.map((value, index) => {
                  return (
                    <div className="input_box_01">
                      <input
                        name={value.name}
                        type={value.type}
                        value={value.value}
                        onChange={(event) => {
                          handleInputChange1(event);
                        }}
                      />
                      <p>{value.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="input_box">
              <p>희망 근무형태</p>
              <div className="input_box_container_01">
                <div className="input_box_01">
                  <img
                    src={
                      checkState1 === true
                        ? "/images/signInForm_s1_img2.png"
                        : "/images/signInForm_s1_img1.png"
                    }
                    onClick={changeState1}
                  />
                  <p style={{ color: checkState1 === true ? "#2196F3" : "" }}>
                    재택
                  </p>
                </div>
                <div className="input_box_01">
                  <img
                    src={
                      checkState1 === false
                        ? "/images/signInForm_s1_img2.png"
                        : "/images/signInForm_s1_img1.png"
                    }
                    onClick={changeState1}
                  />
                  <p style={{ color: checkState1 === false ? "#2196F3" : "" }}>
                    출근
                  </p>
                </div>
              </div>
            </div>
            <div className="input_box">
              <p>희망 보수</p>
              <div className="input_box_container_01">
                <div className="input_box_01">
                  <input
                    name={inputValues2.name}
                    type={inputValues2.type}
                    value={inputValues2.value}
                    onChange={(event) => {
                      handleInputChange2(event);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_container">
          <div className="btn">취소</div>
          <div className="btn">이력서 저장</div>
        </div>
      </div>
      <div className="text_box">
        <p>© 2023 회전문</p>
      </div>
    </div>
  );
};

export default ResumeS3;
