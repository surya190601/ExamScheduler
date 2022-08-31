import React from "react";
import {
  DropDown1,
  FNANButton,
  SaveButton,
  StyledArrow,
  StyledCheckBox,
  StyledInput1,
  StyledInput2,
  StyledInput3,
  StyledInput4,
  StyledInput4Date,
  StyledInputText1,
  StyledInputText2,
  StyledInputText2_1,
  StyledInputText2_2,
  StyledInputText3,
  StyledInputText4,
  StyledInputText5,
  StyledInputText6,
  StyledMainContainer,
  StyledTitle,
  StyledWrapper,
} from "./NewSchedule.styled";
import { useState } from "react";
import {
  DROPDOWN_BRANCH_OPTIONS,
  DROPDOWN_DEPARTMENT_OPTIONS,
  DROPDOWN_EXAMTYPE_OPTIONS,
  DROPDOWN_SUBJECT_OPTIONS,
} from "../../Common/data/DropDown";

const NewSchedule = () => {
  const [selectedOption, setSelectedOption] = useState(
    DROPDOWN_BRANCH_OPTIONS[0]
  );
  const [selectedOption1, setSelectedOption1] = useState(
    DROPDOWN_DEPARTMENT_OPTIONS[0]
  );
  const [selectedOption2, setSelectedOption2] = useState(
    DROPDOWN_EXAMTYPE_OPTIONS[0]
  );

  const [selectedOption3, setSelectedOption3] = useState(
    DROPDOWN_SUBJECT_OPTIONS[0]
  );

  return (
    <>
      <StyledMainContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <StyledArrow
            src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"
            alt="Arrow-Back"
          />
          <StyledTitle>Create new schedule</StyledTitle>
        </div>
        <StyledWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "12px",
            }}
          >
            <StyledInputText1 label={"Branch"} />
            <StyledInputText1 label={"Department"} />
            <StyledInputText1 label={"Semester"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
            }}
          >
            <DropDown1
              options={DROPDOWN_BRANCH_OPTIONS}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              marginRight="268px"
              labelMarginRight="30px"
            />
            <DropDown1
              options={DROPDOWN_DEPARTMENT_OPTIONS}
              selectedOption={selectedOption1}
              setSelectedOption={setSelectedOption1}
              marginRight="300px"
              labelMarginRight="30px"
            />
            <StyledInput1 placeholder="3" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <StyledInputText1 label={"ExamType"} />
            <DropDown1
              options={DROPDOWN_EXAMTYPE_OPTIONS}
              selectedOption={selectedOption2}
              setSelectedOption={setSelectedOption2}
            />
          </div>
          <div>
            <StyledInputText1 label={"Time Range"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
            }}
          >
            <StyledInputText2 label="FN" />
            <StyledInput2 type="number" value="09" />
            <StyledInput2 type="number" value="30" />
            <StyledInput2 placeholder="AM" />
            <StyledInputText2_1 label="to" />
            <StyledInput2 type="number" value="12" />
            <StyledInput2 type="number" value="30" />
            <StyledInput2 placeholder="PM" />
            <StyledInputText2_2 label="3 hours" />
            <StyledCheckBox type="checkbox" value="FN" />
            <StyledInputText2_2 label="Set all for FN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <StyledInputText2 label="FN" />
            <StyledInput2 type="number" value="01" />
            <StyledInput2 type="number" value="30" />
            <StyledInput2 placeholder="AM" />
            <StyledInputText2_1 label="to" />
            <StyledInput2 type="number" value="04" />
            <StyledInput2 type="number" value="30" />
            <StyledInput2 placeholder="PM" />
            <StyledInputText2_2 label="3 hours" />
            <StyledCheckBox type="checkbox" value="AN" />
            <StyledInputText2_2 label="Set all for AN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "12px",
            }}
          >
            <StyledInputText3 label={"Subjects"} />
            <StyledInputText3 label={"Labs"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <StyledInput3 placeholder="5" />
            <StyledInput3 placeholder="2" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Subject 1" />
            <StyledInputText1 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Subject 2" />
            <StyledInputText1 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Subject 3" />
            <StyledInputText1 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Subject 4" />
            <StyledInputText1 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Subject 5" />
            <StyledInputText1 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
          <StyledInputText5 label="Lab" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Lab 1" />
            <StyledInputText6 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Lab Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledInputText4 label="Lab 2" />
            <StyledInputText6 label="Date" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <DropDown1
              options={DROPDOWN_SUBJECT_OPTIONS}
              selectedOption={selectedOption3}
              setSelectedOption={setSelectedOption3}
              marginRight="50px"
              labelMarginRight="18px"
            />
            <StyledInput4 placeholder="Lab Subject Name" />
            <StyledInput4Date type="date" />
            <FNANButton label="FN" />
            <FNANButton label="AN" />
          </div>
        </StyledWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <SaveButton label="Save" />
          <div />
        </div>
      </StyledMainContainer>
    </>
  );
};

export default NewSchedule;
