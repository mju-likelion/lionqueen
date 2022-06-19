import styled from 'styled-components';

import DoorBottom from '../../public/image/DoorBottom.svg';
import Gear from '../../public/image/Gear.svg';
import LoungeDoor from '~DesignSystem/LoungeDoor';
import FloorButton from '~DesignSystem/FloorButton';
import LoungeNameBoard from '~DesignSystem/LoungeNameBoard';

const LoungeBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: -2;
  /* background-color: ${({ theme }) => theme.colors.primary.skyblue}; */
  background-color: #c5e5ff;
  position: relative;
`;

const LoungeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 1024px;
  height: 100%;
  overflow: hidden;
  /* background-color: yellowgreen; */
`;

const FloorBtnWrap = styled.div`
  position: absolute;
  bottom: 2%;
  left: 20%;
`;

const BoardWrap = styled.div`
  position: absolute;
  top: -90px;
`;

const GearWrap = styled.div`
  position: absolute;
  bottom: 4%;
  right: 16%;
  cursor: pointer;
`;

const Lounge = () => {
  return (
    <LoungeBg>
      <LoungeList>
        <LoungeDoor />
      </LoungeList>
      <BoardWrap>
        <LoungeNameBoard />
      </BoardWrap>
      <FloorBtnWrap>
        <FloorButton />
      </FloorBtnWrap>
      <GearWrap>
        <Gear />
      </GearWrap>
      <DoorBottom />
    </LoungeBg>
  );
};

export default Lounge;
