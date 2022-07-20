import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
// import { scrollTo } from 'seamless-scroll-polyfill';

import FloorNumber from '~components/lounge/FloorDemoData';
import DoorBottom from '~components/icons/DoorBottom.svg';
import Gear from '~components/icons/Gear.svg';
import NameBoard from '~components/lounge/NameBoard';
import FloorButton from '~components/lounge/FloorButton';
import LoungeDoor from '~components/lounge/LoungeDoor';

const LoungeHome = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const floorRef = useRef<HTMLDivElement>(null);

  const handleScrollUp = () => {
    if (currentFloor === 4) setCurrentFloor(0);
    else setCurrentFloor(currentFloor + 1);
  };

  const handleScrollDown = () => {
    if (currentFloor === 0) setCurrentFloor(0);
    else setCurrentFloor(currentFloor - 1);
  };

  useEffect(() => {
    if (floorRef.current !== null) {
      floorRef.current.style.transition = 'transform 1.2s ease-out';
      floorRef.current.style.transform = `translateY(calc(${currentFloor}00% * 0.735))`;
    }
  }, [currentFloor]);

  // useEffect(() => {
  //   if (floorRef.current !== null) {
  //     scrollTo(floorRef.current, { top: currentFloor * 560, behavior: 'smooth' });
  //   }
  // }, [currentFloor]);

  return (
    <LoungeBg>
      <NameBoard />
      <ListBottomContainer>
        <Lounge>
          <LoungeList ref={floorRef}>
            {FloorNumber.map(floor => (
              <FloorContainer key={floor}>
                <FloorLine />
                <FloorNum>{floor}</FloorNum>
              </FloorContainer>
            ))}
            <LoungeDoor />
          </LoungeList>
        </Lounge>
        <Bottom>
          <BottomLine />
          <BottomContainer>
            <FloorButton onScrollUp={handleScrollUp} onScrollDown={handleScrollDown} />
            <DoorBottom />
            <Gear />
          </BottomContainer>
        </Bottom>
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
  overflow: hidden;
`;

const ListBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Lounge = styled.div`
  overflow: hidden;
`;

const LoungeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -320px;
  height: 870px;

  @media (max-width: 1024px) {
    margin-bottom: -280px;
    height: 770px;
  }
`;

const FloorContainer = styled.div`
  display: flex;
  position: relative;
`;

const FloorNum = styled.p`
  margin: 230px 0 0 -50px;
  margin: -40px 0 0 -65px;
  padding: 35px 0 10px;
  padding: 0;
  width: 65px;
  height: 67px;
  font-family: NanumBarunGothic;
  font-size: 35px;
  font-weight: 800;

  @media (max-width: 1024px) {
    margin: -30px 0 0 -65px;
    font-size: 27px;
  }
`;

const FloorLine = styled.div`
  z-index: 3;
  margin-bottom: 300px;
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 1050px;
  height: 20px;
  pointer-events: none;

  @media (max-width: 1024px) {
    margin-bottom: 260px;
    width: 820px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  width: 1024px;
  place-items: center;

  @media (max-width: 1024px) {
    margin-bottom: -25px;
    width: 750px;
  }
`;

const BottomLine = styled.div`
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 1050px;
  height: 20px;
  pointer-events: none;

  @media (max-width: 1024px) {
    width: 820px;
  }
`;

export default LoungeHome;
