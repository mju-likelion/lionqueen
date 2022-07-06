import styled from 'styled-components';

import TestDoor from '~components/lounge/LoungeDemoData';

const LoungeDoor = () => {
  return (
    <LoungeFloor>
      <DoorsContainer>
        <Doors>
          {TestDoor.map(item => (
            <LoungeDoors key={item.userNum}>
              <NameSpace>
                <RoomName>{item.userName}</RoomName>
              </NameSpace>
              <Knob />
            </LoungeDoors>
          ))}
        </Doors>
      </DoorsContainer>
    </LoungeFloor>
  );
};

const LoungeFloor = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  bottom: 0;

  @media (max-height: 900px) {
    padding-top: 73px;
  }
`;

const DoorsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1024px;
`;

const Doors = styled.div`
  display: grid;
  width: 1024px;
  row-gap: 85px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  @media (max-height: 900px) {
    row-gap: 60px;
  }
`;

const LoungeDoors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 154px;
  height: 220px;
  margin-bottom: 20px;
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  cursor: pointer;
`;

const NameSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
`;

const RoomName = styled.p`
  display: block;
  width: 122px;
  height: 42px;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  background-color: #fff;
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
