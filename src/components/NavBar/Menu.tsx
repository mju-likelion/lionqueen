import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '~DesignSystem/Button';
import LionLogo from '~components/icons/LionLogo';

const Menu = () => {
  return (
    <NavBarWrapper>
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

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 888px;

  position: absolute;
  right: 0;
  top: 56px;
  z-index: 10;

  background-color: rgba(255, 187, 23, 0.7);
  border-radius: 20px;
  user-select: none;
`;

const TextTitle = styled.p`
  font-size: 72px;
  font-weight: 300;
  line-height: 80px;
  text-align: center;

  margin-bottom: 71px;
  margin-top: 32px;
`;

const LionLogoBox = styled.div`
  position: absolute;
  width: 159px;
  height: 154px;
  bottom: 30px;
`;

const MenuItem = styled.a`
  width: 160px;
  height: 42px;
  font-size: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary.orange};
  border: 2px solid #fff38b;
  border-radius: 10px;

  text-align: center;
  line-height: 28px;

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
