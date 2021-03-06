import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { scrollTo } from 'seamless-scroll-polyfill';

import DoorBottom from '~components/icons/DoorBottom.svg';
import NameBoard from '~components/lounge/NameBoard';
import FloorButton from '~components/lounge/FloorButton';
import LoungeDoor from '~components/lounge/LoungeDoor';
import NavBar from '~components/NavBar';

const LoungeHome = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const floorRef = useRef<HTMLDivElement>(null);
  // 0: 9-10F / 1: 7-8F / 2: 5-6F / 3: 3-4F / 4: 1-2F
  const totalFloor = 4;

  //
  const handleScrollUp = () => {
    if (currentFloor === 0) {
      setCurrentFloor(totalFloor);
    } else {
      setCurrentFloor(currentFloor - 1);
    }
  };

  const handleScrollDown = () => {
    if (currentFloor >= totalFloor) {
      setCurrentFloor(0);
    } else {
      setCurrentFloor(currentFloor + 1);
    }
  };

  // 렌더링 시 맨 아래로 이동구현
  useEffect(() => {
    if (floorRef.current !== null) {
      scrollTo(floorRef.current, { top: 630 * 4, behavior: 'smooth' });
    }
  }, []);

  // 버튼 누를 때
  useEffect(() => {
    if (floorRef.current !== null) {
      scrollTo(floorRef.current, { top: currentFloor * 630, behavior: 'smooth' });
    }
  }, [currentFloor]);

  return (
    <LoungeBg>
      <NameBoard />
      <ListBottomContainer>
        <Bottom>
          <FloorLine />
          <BottomContainer>
            <FloorButton onScrollUp={handleScrollUp} onScrollDown={handleScrollDown} />
            <DoorBottom />
            <NavbarWrap>
              <NavBar />
            </NavbarWrap>
          </BottomContainer>
        </Bottom>
        <LoungeFloor ref={floorRef}>
          <LoungeDoor />
        </LoungeFloor>
      </ListBottomContainer>
    </LoungeBg>
  );
};

const LoungeBg = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  width: 100%;
  height: 100vh;
`;

const ListBottomContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const LoungeFloor = styled.div`
  margin-bottom: 0;
  width: 975px;
  height: 535px;
  overflow: hidden;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 970px;
`;

const FloorLine = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 970px;
  height: 20px;
`;

const NavbarWrap = styled.div`
  cursor: pointer;
`;

export default LoungeHome;
