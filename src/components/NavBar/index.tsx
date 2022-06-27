import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '~DesignSystem/Button';
import LionLogo from '../icons/LionLogo';

function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarBox>
        <TextTitle>메뉴</TextTitle>
        <Link href="/MyPage">
          <StyledPrimaryButton>마이페이지</StyledPrimaryButton>
        </Link>
        <StyledPrimaryButton>그룹 전환</StyledPrimaryButton>
        <StyledSecondaryButton>로그아웃</StyledSecondaryButton>
        <LionLogoContainer />
      </NavBarBox>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  top: 56px;
  background-color: rgba(255, 187, 23, 0.7);
  width: 200px;
  height: 888px;
  border-radius: 20px;
`;

const NavBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextTitle = styled.p`
  font-weight: 300;
  line-height: 80px;
  margin-bottom: 71px;
  margin-top: 32px;
  font-size: 72px;
  text-align: center;
`;

const LionLogoContainer = styled(LionLogo)`
  width: 159px;
  height: 154px;
`;

const StyledPrimaryButton = styled(Button)`
  margin-bottom: 54px;
`;

const StyledSecondaryButton = styled(Button)`
  margin-bottom: 287px;
`;
export default NavBar;
