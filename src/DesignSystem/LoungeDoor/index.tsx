import styled from 'styled-components';

const LoungeFloor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .doorContainer {
    width: 1024px;
    display: flex;
    justify-content: space-evenly;
    padding: 8% 0 0 0;
  }
`;

const LoungeDoors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 154px;
  height: 220px;
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: #ffe161;
  cursor: pointer;

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

const TestDoor = ['수정', '유라', '소연', '수진'];

const LoungeDoor = () => {
  return (
    <LoungeFloor>
      <div className="doorContainer">
        {TestDoor.map(item => (
          <LoungeDoors key={item}>
            <div className="nameSpace">
              <p>{item}</p>
            </div>
            <div className="knobContainer">
              <div className="doorKnob" />
            </div>
          </LoungeDoors>
        ))}
      </div>
      <DoorLine />
    </LoungeFloor>
  );
};

export default LoungeDoor;
