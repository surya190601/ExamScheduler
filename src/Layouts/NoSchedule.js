import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateButton from "../Components/CreateButton";
import TextComponent from "../Components/TextComponent";

const NoSchedule = () => {
  return (
    <div style={{ padding: "5.98639455782313vw 34.21768707482993vw 8.80952380952381vw" ,position:'relative'}}>
      <NoScheduleImage
        src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"
        alt="Events-rafiki-1"
      />
      < NoScheduleImageText
        label="There are no schedules get started by creating schedules"
      />
      <Link to = "/CreateSchedulePage" style={{ textDecoration: 'none' }}>
      <CreateButton/>
      </Link>
    </div>
  );
};

export default NoSchedule;

const NoScheduleImageText = styled(TextComponent)`
  position: absolute;
  left: 34.4%;
  top: 65.4%;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0.03em;
  color: #000000;
`;

const NoScheduleImage = styled.img`
  height: 444px;
  width: 434px;
  object-fit: contain;
`;