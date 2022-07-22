import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Button from '~DesignSystem/Button';
import LionLogo from '~components/icons/LionLogo';

type Props = {
  isOpenNavBar: boolean;
};

const Menu = ({ isOpenNavBar }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [isSlideIn, setIsSlideIn] = useState(false);

  useEffect(() => {
    if (isOpenNavBar) {
      setIsShow(true);
      setIsSlideIn(true);
    } else {
      setIsSlideIn(false);
      setTimeout(() => {
        setIsShow(false);
      }, 190);
    }
  }, [isOpenNavBar]);

  if (!isShow) return null;

  return (
    <NavBarWrapper isSlideIn={isSlideIn}>
      <TextTitle>메뉴</TextTitle>
      <ButtonBox>
        <Link href="/my-page">
          <MenuItem>마이페이지</MenuItem>
        </Link>
        <Link href="/lounge-select">
          <MenuItem>그룹 전환</MenuItem>
        </Link>
        <Button>로그아웃</Button>
      </ButtonBox>
      <LionLogoBox>
        <LionLogo />
      </LionLogoBox>
    </NavBarWrapper>
  );
};

const slideIn = keyframes`
  0%{
    transform: translateX(100%);
  }

  100%{
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  
  100%{
    transform: translateX(10%);
    opacity: 0;
  }
`;

const NavBarWrapper = styled.div<{ isSlideIn: boolean }>`
  display: flex;
  position: fixed;
  top: 56px;
  right: 0;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  border-radius: 20px;
  background-color: #ffbb17b3;
  width: 200px;
  height: 888px;
  user-select: none;
  animation: ${props => (props.isSlideIn ? slideIn : slideOut)} 0.2s linear;
`;

const TextTitle = styled.p`
  margin-top: 32px;
  margin-bottom: 71px;
  text-align: center;
  line-height: 80px;
  font-size: 72px;
  font-weight: 300;
`;

const LionLogoBox = styled.div`
  position: absolute;
  bottom: 30px;
  width: 159px;
  height: 154px;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff38b;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  width: 160px;
  height: 42px;
  text-align: center;
  line-height: 28px;
  font-size: 22px;

  :hover {
    background: linear-gradient(180deg, #f2b112 0%, #f3ca67 100%);
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;

export default Menu;
