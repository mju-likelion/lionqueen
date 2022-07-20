import styled from 'styled-components';
// import { useState, useEffect, useRef } from 'react';
// import { scrollTo } from 'seamless-scroll-polyfill';

import FloorNumber from '~components/lounge/FloorDemoData';
import DoorBottom from '~components/icons/DoorBottom.svg';
import Gear from '~components/icons/Gear.svg';
import NameBoard from '~components/lounge/NameBoard';
import FloorButton from '~components/lounge/FloorButton';
import LoungeDoor from '~components/lounge/LoungeDoor';

const LoungeHome = () => {
  // const [currentFloor, setCurrentFloor] = useState<number>(0);
  // const floorRef = useRef<HTMLDivElement>(null);

  // const handleScrollUp = () => {
  //   if (currentFloor === 4) setCurrentFloor(0);
  //   else setCurrentFloor(currentFloor + 1);
  // };

  // const handleScrollDown = () => {
  //   if (currentFloor === 0) setCurrentFloor(0);
  //   else setCurrentFloor(currentFloor - 1);
  // };

  // useEffect(() => {
  //   if (floorRef.current !== null) {
  //     floorRef.current.style.transition = 'transform 1.2s ease-out';
  //     floorRef.current.style.transform = `translateY(calc(${currentFloor}00% * 0.735))`;
  //   }
  // }, [currentFloor]);

  // useEffect(() => {
  //   if (floorRef.current !== null) {
  //     scrollTo(floorRef.current, { top: currentFloor * 560, behavior: 'smooth' });
  //   }
  // }, [currentFloor]);

  return (
    <LoungeBg>
      <NameBoard />
      <ListBottomContainer>
        <Bottom>
          <FloorLine />
          <BottomContainer>
            <FloorButton />
            <DoorBottom />
            <Gear />
          </BottomContainer>
        </Bottom>
        <Lounge>
          {FloorNumber.map(floor => (
            <FloorNumContainer key={floor}>
              <FloorNum>{floor}</FloorNum>
              <FloorLine />
            </FloorNumContainer>
          ))}
        </Lounge>
        <LoungeDoor />
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

const Lounge = styled.div`
  margin-bottom: -20px;
`;

const FloorNumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 245px;
`;

const FloorNum = styled.div`
  background-color: pink;
  padding: 10px 10px 5px 0;
  width: 50px;
  height: 50px;
  text-align: center;
  font-family: NanumBarunGothic;
  font-size: 35px;
  font-weight: 800;
`;

const Bottom = styled.div`
  display: flex;
  position: relative;
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
export default LoungeHome;
