import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '~DesignSystem/Button';
import LionLogo from '~components/icons/LionLogo';
import Axios from '~lib/axios';

type Props = {
  isOpenNavBar: boolean;
};

const Menu = ({ isOpenNavBar }: Props) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const [isSlideIn, setIsSlideIn] = useState(false);

  const onClickLogOut = async () => {
    try {
      await Axios.delete('/api/auth/sign-out', { withCredentials: true });
      router.push('/sign-in');
      console.log('로그아웃 성공');
    } catch (err) {
      console.log('로그아웃 안 됨 ㅎ');
    }
    // removeCookie('jwt');
  };

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
        <Button onClick={onClickLogOut}>로그아웃</Button>
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
  top: 5%;
  right: 0;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  border-radius: 20px;
  background-color: #ffbb17b3;
  user-select: none;
  width: 200px;
  height: 90%;
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
