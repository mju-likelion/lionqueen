import styled from 'styled-components';

import TestDoor from '~components/lounge/LoungeDemoData';

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
  padding-top: 90px;

  @media screen and (max-height: 900px) {
    padding-top: 73px;
  }
`;

const DoorsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1024px;
`;

const FloorLine = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 1024px;
  height: 20px;
`;

const LoungeDoors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  cursor: pointer;
  width: 15%;
  height: 220px;
`;

const NameSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomName = styled.p`
  margin: 0;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0;
  width: 80%;
  height: 38%;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const Knob = styled.div`
  margin-left: 10px;
  border-radius: 100%;
  box-shadow: 0 4px 5px #7f7f7f99;
  background-color: #7f7f7f;
  width: 18px;
  height: 18px;
`;

export default LoungeDoor;
