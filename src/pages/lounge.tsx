import styled from 'styled-components';

import DoorBottom from '../../public/image/DoorBottom.svg';

const LoungeBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #c5e5ff;
`;

const LoungeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 1024px;
  height: 100%;
  /* background-color: yellowgreen; */
`;

const LoungeFloor = styled.div`
  display: flex;
  flex-direction: column;

  .doorContainer {
    display: flex;
    justify-content: space-around;
  }
`;

const LoungeDoor = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 154px;
  height: 220px;
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: #ffe161;

  .nameSpace {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 122px;
      height: 42px;
      margin: 0;
      padding: 0;
      border-radius: 10px;
      text-align: center;
      box-sizing: border-box;
      background-color: #fff;
    }
  }

  .knobContainer {
    .doorKnob {
      width: 18px;
      height: 18px;
      margin: 0 0 0 10px;
      border-radius: 100%;
      box-shadow: 0 4px 5px #7f7f7f99;
      background-color: #7f7f7f;
    }
  }
`;

const DoorLine = styled.div`
  width: 1024px;
  height: 20px;
  background-color: #8d8255;
`;

const TestDoor = [1, 2, 3, 4];

const Lounge = () => {
  return (
    <LoungeBg>
      <LoungeList>
        <LoungeFloor>
          <div className="doorContainer">
            {TestDoor.map(item => (
              <LoungeDoor key={item}>
                <div className="nameSpace">
                  <p>유저이름</p>
                </div>
                <div className="knobContainer">
                  <div className="doorKnob" />
                </div>
              </LoungeDoor>
            ))}
          </div>
          <DoorLine />
        </LoungeFloor>
      </LoungeList>
      <DoorBottom />
    </LoungeBg>
  );
};

export default Lounge;
