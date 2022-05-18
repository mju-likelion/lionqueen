import React from 'react';
import Button from '~DesignSystem/Button';
import { Orange } from '~DesignSystem/Button/Button.stories';

function NavBar() {
  return (
    <div className="bg-primary-orange w-[200px] h-[888px] rounded-[20px] flex flex-col items-center">
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
    </div>
  );
}

export default NavBar;
