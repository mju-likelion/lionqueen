import React from "react";
import Button from "~DesignSystem/Button";

function NavBar() {
  return (
    <div className="bg-primary-orange w-[200px] h-[888px] rounded-[20px] flex flex-col items-center">
      <p className="mb-[71px] mt-8 font-light text-7xl ">메뉴</p>
      <button className="mb-[54px]">마이페이지</button>
      <button className="mb-[54px]">그룹 전환</button>
      <button className="mb-[54px]">로그아웃</button>
    </div>
  );
}

export default NavBar;
