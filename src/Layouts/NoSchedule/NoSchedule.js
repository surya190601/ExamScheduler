import React from "react";
import styled from "styled-components";
import CreateButton from "../../Components/CreateButton";
import { NoScheduleImageText,NoScheduleImage } from "./NoSchedule.styled";



const NoSchedule = () => {
  return (
    <div style={{ padding: "5.98639455782313vw 34.21768707482993vw 6.80952380952381vw" ,position:'relative'}}>
      <NoScheduleImage
        src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"
        alt="Events-rafiki-1"
      />
      < NoScheduleImageText
        label="There are no schedules get started by creating schedules"
      />
      <CreateButton/>
    </div>
  );
};

export default NoSchedule;
