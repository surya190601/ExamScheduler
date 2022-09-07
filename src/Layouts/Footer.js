import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  font-weight: 200;
  font-size: 12px;
  line-height: 130%;
  background: #fbfbfb;
  padding-left: 20%;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.03em;
  color: #000000;
  //color:red;
`;

const FooterText = styled.p`
  margin-left: 20%;
  background: #fbfbfb;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <p>Conditions of use & sale </p>
        <FooterText>Privacy notice</FooterText>
        <FooterText>Powered By Incresco</FooterText>
      </FooterWrapper>
    </>
  );
};

export default Footer;
