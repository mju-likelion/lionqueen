import React from 'react';
import styled from 'styled-components';
import Button from '~DesignSystem/Button';
import ImgBox from '../../../public/image/lion.svg';

function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarBox>
        <TextTitle>메뉴</TextTitle>
        <ButtonStyle>마이페이지</ButtonStyle>
        <ButtonStyle>그룹 전환</ButtonStyle>
        <ButtonStyle>로그아웃</ButtonStyle>
        <ImgContainer />
      </NavBarBox>
    </NavBarWrapper>
  );
}

const TextTitle = styled.p`
  font-weight: 300;
  line-height: 80px;
  margin-bottom: 71px;
  margin-top: 32px;
  font-size: 72px;
  text-align: center;
`;

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

const ImgContainer = styled(ImgBox)`
  width: 159px;
  height: 154px;
  margin-top: 233px;
`;

const ButtonStyle = styled(Button)`
  margin-bottom: 54px;
`;

export default NavBar;
