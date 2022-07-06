import React, { useState } from 'react';
import styled from 'styled-components';
import NavBarIcon from '~components/icons/NavBarIcon';
import Menu from '~components/NavBar/Menu';

function NavBar() {
  const [isOpenNavBar, setIsOpenNavBar] = useState<boolean>(false);

  return (
    <div>
      <NavBarWrapper>
        <NavBarIconBox
          onClick={() => {
            setIsOpenNavBar(!isOpenNavBar);
          }}
        >
          <NavBarIcon />
        </NavBarIconBox>
      </NavBarWrapper>
      {isOpenNavBar && <Menu />}
    </div>
  );
}

const NavBarIconBox = styled.button``;
const NavBarWrapper = styled.div`
  position: absolute;
  z-index: 10;

  right: 237px;
  bottom: 79px;
`;
export default NavBar;
