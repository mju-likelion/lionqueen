import styled from 'styled-components';

import TestDoor from '~components/lounge/LoungeDemoData';

const LoungeDoor = () => {
  return (
    <LoungeFloor>
      <Doors>
        {TestDoor.slice(0)
          .reverse()
          .map(door => (
            <LoungeDoors key={door.userNum}>
              <NameSpace>
                <RoomName>{door.userName}</RoomName>
              </NameSpace>
              <Knob />
            </LoungeDoors>
          ))}
      </Doors>
    </LoungeFloor>
  );
};

const LoungeFloor = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  flex-direction: column;
`;

const Doors = styled.div`
  display: grid;
  row-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  width: 950px;
`;

const LoungeDoors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  cursor: pointer;
  width: 150px;
  height: 215px;
`;

const NameSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
`;

const RoomName = styled.p`
  display: block;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  width: 122px;
  height: 42px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 19px;
  font-weight: 500;
`;

const Knob = styled.div`
  margin-left: 15px;
  border-radius: 100%;
  box-shadow: 0 4px 5px #7f7f7f99;
  background-color: #7f7f7f;
  width: 18px;
  height: 18px;
`;

export default LoungeDoor;
