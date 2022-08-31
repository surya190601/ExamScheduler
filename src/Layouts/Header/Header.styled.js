import styled from "styled-components";
import TextComponent from "../../Components/TextComponent";
export const StyledHeaderContainer = styled.div`
  padding: 1% 8% 0.5% 3%;
  display: flex;
  flex-direction: row;
  background: #5375e2;
`;

export const CollegeLogo = styled.img`
  height: 52px;
  width: 53px;
`;

export const StyledHeaderText1 = styled(TextComponent)`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 3%;
  margin-bottom: 3px;
  flex-direction: row;
`;

export const StyledHeaderText2 = styled(TextComponent)`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
  margin-left: 3%;
`;
export const DivDivider1 = styled.div`
  width: 100%;
`;

export const DivDivider2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 45%;
`;

export const UserLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
export const UserName = styled(TextComponent)`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  margin-top: 17px;
  margin-bottom: 14px;
  margin-left: 11px;
`;


