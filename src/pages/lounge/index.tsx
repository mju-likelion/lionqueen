import styled from 'styled-components';
import { useState } from 'react';

import FloorNumber from '~components/lounge/FloorDemoData';
import DoorBottom from '~components/icons/DoorBottom.svg';
import Gear from '~components/icons/Gear.svg';
import FloorButton from '~components/lounge/FloorButton';
import NameBoard from '~components/lounge/NameBoard';
import LoungeDoor from '~components/lounge/LoungeDoor';

const LoungeHome = () => {
  const handleScrollUp = () => {
    console.log('up');
  };

  const handleScrollDown = () => {
    console.log('down');
  };

  return (
    <LoungeBg>
      <NameBoard />
      <ListBottomContainer>
        <Lounge>
          <LoungeList>
            {FloorNumber.map(floor => (
              <FloorContainer key={floor}>
                <FloorLine />
                <FloorNum>{floor}</FloorNum>
              </FloorContainer>
            ))}
            <LoungeDoor />
          </LoungeList>
        </Lounge>
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
  overflow-y: hidden;
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
  top: 110px;
  height: 650px;
  overflow: hidden;

  @media (max-height: 900px) {
    top: 75px;
    height: 600px;
  }
`;

const LoungeList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 650px;
  /* transform: translate(0, 650px); */
  /* transition: transform 1.2s ease-out; */

  @media (max-height: 900px) {
    height: 600px;
    /* transform: translate(0, 600px); */
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
