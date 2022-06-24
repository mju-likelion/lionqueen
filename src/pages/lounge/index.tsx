import styled from 'styled-components';

import { theme } from '../../styles/theme';

import DoorBottom from '../../../public/image/DoorBottom.svg';
import Gear from '../../../public/image/Gear.svg';
import FloorButton from './FloorButton';
import NameBoard from './NameBoard';
import LoungeDoor from './LoungeDoor';

const LoungeHome = () => {
  return (
    <LoungeBg>
      <NameBoard />
      <LoungeList>
        {TestFloor.map(floor => (
          <FloorContainer key={floor}>
            <LoungeDoor />
            <FloorNum>{floor}</FloorNum>
          </FloorContainer>
        ))}
        <BottomContainer>
          <FloorButton />
          <DoorBottom />
          <GearWrap>
            <Gear />
          </GearWrap>
        </BottomContainer>
      </LoungeList>
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
  background-color: ${theme.colors.primary.skyblue};
`;

const LoungeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 1024px;
  height: 100%;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 340px 340px;
  margin: 0 0 -10px 0;
`;

const GearWrap = styled.div`
  margin: 85px 0 0 330px;
  cursor: pointer;
`;

const FloorContainer = styled.div`
  display: flex;
`;

const FloorNum = styled.p`
  width: 65px;
  height: 67px;
  margin: 230px 0 0 -50px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

const TestFloor: string[] = ['10F', '9F', '8F', '7F', '6F', '5F', '4F', '3F', '2F', '1F'];

export default LoungeHome;
