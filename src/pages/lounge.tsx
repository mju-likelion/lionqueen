import styled from 'styled-components';

import DoorBottom from '../../public/image/DoorBottom.svg';
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

// const LoungeFloor = styled.div`
//   display: flex;
//   flex-direction: column;

//   .doorContainer {
//     display: flex;
//     justify-content: space-evenly;
//   }
// `;

// const LoungeDoor = styled.div`
//   display: grid;
//   grid-template-rows: repeat(2, 1fr);
//   width: 154px;
//   height: 220px;
//   border-radius: 15px 15px 0 0;
//   box-shadow: 8px 0 5px #7f7f7fb3;
//   background-color: #ffe161;
//   cursor: pointer;

//   .nameSpace {
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     p {
//       width: 122px;
//       height: 42px;
//       margin: 0;
//       padding: 0;
//       border-radius: 10px;
//       text-align: center;
//       box-sizing: border-box;
//       background-color: #fff;
//     }
//   }

//   .knobContainer {
//     .doorKnob {
//       width: 18px;
//       height: 18px;
//       margin: 0 0 0 10px;
//       border-radius: 100%;
//       box-shadow: 0 4px 5px #7f7f7f99;
//       background-color: #7f7f7f;
//     }
//   }
// `;

// const DoorLine = styled.div`
//   width: 1024px;
//   height: 20px;
//   background-color: #8d8255;
// `;

// const TestDoor = [1, 2, 3, 4];

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
      <DoorBottom />
    </LoungeBg>
  );
};

export default Lounge;
