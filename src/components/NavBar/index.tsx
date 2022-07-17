import React, { useState } from 'react';
import styled from 'styled-components';
import NavBarIcon from '~components/icons/NavBarIcon';
import Menu from '~components/NavBar/Menu';

function NavBar() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  return (
    <div>
      <NavBarWrapper
        onClick={() => {
          setIsOpenNavBar(!isOpenNavBar);
        }}
      >
        <NavBarIcon />
      </NavBarWrapper>
      {isOpenNavBar && <Menu />}
    </div>
  );
}

const NavBarWrapper = styled.div`
  position: absolute;

  right: 237px;
  bottom: 79px;
  z-index: 10;
`;

export default NavBar;
