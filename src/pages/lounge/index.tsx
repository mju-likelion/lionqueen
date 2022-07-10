import styled from 'styled-components';
import { useState, useEffect, useRef, MutableRefObject } from 'react';

import FloorNumber from '~components/lounge/FloorDemoData';
import DoorBottom from '~components/icons/DoorBottom.svg';
import Gear from '~components/icons/Gear.svg';
import NameBoard from '~components/lounge/NameBoard';
import FloorButton from '~components/lounge/FloorButton';
import LoungeDoor from '~components/lounge/LoungeDoor';

const LoungeHome = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const floorRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleScrollUp = () => {
    if (currentFloor === 4) setCurrentFloor(0);
    else setCurrentFloor(currentFloor + 1);
  };

  const handleScrollDown = () => {
    if (currentFloor === 0) setCurrentFloor(0);
    else setCurrentFloor(currentFloor - 1);
  };

  useEffect(() => {
    floorRef.current.style.transition = 'transform 1.2s ease-out';
    floorRef.current.style.transform = `translateY(calc(${currentFloor}00% * 0.735))`;
  }, [currentFloor]);

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
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
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
  justify-content: flex-end;
  align-items: center;
  height: 870px;
  margin-bottom: -320px;

  @media (max-width: 1024px) {
    height: 770px;
    margin-bottom: -280px;
  }
`;

const FloorContainer = styled.div`
  display: flex;
  position: relative;
`;

const FloorNum = styled.p`
  width: 65px;
  height: 67px;
  margin: -40px 0 0 -65px;
  padding: 0;
  font-family: NanumBarunGothic;
  font-size: 35px;
  font-weight: 800;
  text-align: center;

  @media (max-width: 1024px) {
    margin: -30px 0 0 -65px;
    font-size: 27px;
  }
`;

const FloorLine = styled.div`
  width: 1050px;
  height: 20px;
  margin-bottom: 300px;
  background-color: ${({ theme }) => theme.colors.primary.brown};
  pointer-events: none;
  z-index: 3;

  @media (max-width: 1024px) {
    width: 820px;
    margin-bottom: 260px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 1024px;

  @media (max-width: 1024px) {
    width: 750px;
    margin-bottom: -25px;
  }
`;

const BottomLine = styled.div`
  width: 1050px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary.brown};
  pointer-events: none;
  z-index: 3;

  @media (max-width: 1024px) {
    width: 820px;
  }
`;

export default LoungeHome;
