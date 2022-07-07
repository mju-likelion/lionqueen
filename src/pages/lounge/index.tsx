import styled from 'styled-components';
import { useState, useEffect, useRef, MutableRefObject } from 'react';

import FloorNumber from '~components/lounge/FloorDemoData';
import DoorBottom from '~components/icons/DoorBottom.svg';
import Gear from '~components/icons/Gear.svg';
import FloorButton from '~components/lounge/FloorButton';
import NameBoard from '~components/lounge/NameBoard';
import LoungeDoor from '~components/lounge/LoungeDoor';

const LoungeHome = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  // const floorRef = useRef(document.createElement('div'));
  const floorRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleScrollUp = () => {
    console.log('up');
    if (currentFloor === 4) setCurrentFloor(0);
    else setCurrentFloor(currentFloor + 1);
    console.log(currentFloor);
  };

  const handleScrollDown = () => {
    console.log('down');
    if (currentFloor === 0) setCurrentFloor(0);
    else setCurrentFloor(currentFloor - 1);
    console.log(currentFloor);
  };

  useEffect(() => {
    floorRef.current.style.transition = 'transform 1.2s ease-out';
    floorRef.current.style.transform = `translateY(calc(60px + ${currentFloor}00%)`;
    // floorRef.current.style.transform = `translateY(${currentFloor}00%)`;
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
        <FloorLine />
        <BottomContainer>
          <FloorButton onScrollUp={handleScrollUp} onScrollDown={handleScrollDown} />
          <DoorBottom />
          <GearWrap>
            <Gear />
          </GearWrap>
        </BottomContainer>
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
  align-items: center;
  margin-top: 100px;
`;

const Lounge = styled.div`
  position: fixed;
  top: 160px;
  height: 600px;
  margin-left: 15px;
  overflow: hidden;
  background-color: green;

  @media (max-height: 900px) {
    top: 125px;
    height: 550px;
  }
`;

const LoungeList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 600px;

  @media (max-height: 900px) {
    height: 550px;
  }
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 340px 340px;
  margin-bottom: -10px;
  height: 23%;
`;

const GearWrap = styled.div`
  margin: 85px 0 0 330px;
  cursor: pointer;
`;

const FloorContainer = styled.div`
  display: flex;
`;

const FloorLine = styled.div`
  width: 1024px;
  height: 20px;
  margin: 305px 0 0 50px;
  background-color: ${({ theme }) => theme.colors.primary.brown};
  pointer-events: none;
  z-index: 3;

  @media (max-height: 900px) {
    margin: 280px 0 0 50px;
  }
`;

const FloorNum = styled.p`
  width: 65px;
  height: 67px;
  margin: 255px 0 0 -50px;
  padding: 10px 0 10px 0;
  font-family: NanumBarunGothic;
  font-size: 35px;
  font-weight: 800;
  text-align: center;

  @media screen and (max-height: 900px) {
    padding: 20px 0 10px 0;
    margin: 215px 0 0 -50px;
  }
`;

export default LoungeHome;
