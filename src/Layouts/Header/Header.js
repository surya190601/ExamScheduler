import React from 'react'
import { StyledHeaderContainer,CollegeLogo, StyledHeaderText1 ,DivDivider1, StyledHeaderText2,DivDivider2, UserLogo, UserName} from './Header.styled'
const Header = () => {
  return (
    <StyledHeaderContainer>
        <div>
        <CollegeLogo src="https://i.ibb.co/RQV2JZV/college-Logo.png" alt="LOGO"/>
        </div>
        <DivDivider1 >
          <StyledHeaderText1 label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"/>
          <StyledHeaderText2 label="Exam Scheduler"/>
        </DivDivider1>
        <DivDivider2>
          <UserLogo src="https://i.ibb.co/wgKdx86/healthicons-ui-user-profile.png"/>
          <UserName label = "Waseem"/>
        </DivDivider2>
    </StyledHeaderContainer>
  )
}

export default Header