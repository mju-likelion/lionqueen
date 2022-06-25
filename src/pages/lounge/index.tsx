import styled from 'styled-components';

import DoorBottom from '../../../public/image/DoorBottom.svg';
import Gear from '../../../public/image/Gear.svg';
import FloorButton from './FloorButton';
import NameBoard from './NameBoard';
import LoungeDoor from './LoungeDoor';

const FloorNumber: string[] = ['10F', '9F', '8F', '7F', '6F', '5F', '4F', '3F', '2F', '1F'];

const LoungeHome = () => {
  return (
    <LoungeBg>
      <NameBoard />
      <ListBottomContainer>
        <LoungeList>
          {FloorNumber.map(floor => (
            <FloorContainer key={floor}>
              <LoungeDoor />
              <FloorNum>{floor}</FloorNum>
            </FloorContainer>
          ))}
        </LoungeList>
        <BottomContainer>
          <FloorButton />
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
  position: relative;
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
  margin: 80px 0 0 0;
`;

const LoungeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 624px;
  overflow: hidden;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 340px 340px;
  margin: 0 0 -10px 0;
  height: 23%;
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
  font-family: BlinkMacSystemFont;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

export default LoungeHome;
