import React from 'react';
import Button from '~DesignSystem/Button';
import { Orange } from '~DesignSystem/Button/Button.stories';
import ImgBox from '../../../public/image/cat.svg';

function NavBar() {
  return (
    <div className="absolute right-[0] top-[50%] translate-y-[-50%] ">
      <div className="bg-primary-orange/70 w-[200px] h-[888px] rounded-[20px] flex flex-col items-center">
        <p className="mb-[71px] mt-8 font-light text-7xl ">메뉴</p>
        <Button className="mb-[54px]" color="primary-orange">
          마이페이지
        </Button>
        <Button className="mb-[54px]" color="primary-orange">
          그룹 전환
        </Button>
        <Button className="mb-[54px]" color="primary-orange">
          로그아웃
        </Button>
        <ImgBox className="w-[176px] h-[176px] mt-[200px]" />
      </div>
    </div>
  );
}

export default NavBar;
