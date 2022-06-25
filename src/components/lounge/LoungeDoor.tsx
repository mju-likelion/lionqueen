import styled from 'styled-components';

type TestDoorType = {
  userNum: number;
  userName: string;
};

const TestDoor: TestDoorType[] = [
  { userNum: 1, userName: '수정' },
  { userNum: 2, userName: '유라' },
  { userNum: 3, userName: '소연' },
  { userNum: 4, userName: '수진' },
];

const LoungeDoor = () => {
  return (
    <LoungeFloor>
      <DoorsContainer>
        {TestDoor.map(item => (
          <LoungeDoors key={item.userNum}>
            <NameSpace>
              <RoomName>{item.userName}</RoomName>
            </NameSpace>
            <Knob />
          </LoungeDoors>
        ))}
      </DoorsContainer>
      <FloorLine />
    </LoungeFloor>
  );
};

const LoungeFloor = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 73px;
`;

const DoorsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1024px;
`;

const FloorLine = styled.div`
  width: 1024px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary.brown};
`;

const LoungeDoors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 15%;
  height: 220px;
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  cursor: pointer;
`;

const NameSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoomName = styled.p`
  width: 80%;
  height: 38%;
  margin: 0;
  padding: 10px 0 10px 0;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
`;

const Knob = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border-radius: 100%;
  box-shadow: 0 4px 5px #7f7f7f99;
  background-color: #7f7f7f;
`;

export default LoungeDoor;
