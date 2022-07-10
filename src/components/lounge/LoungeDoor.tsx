import styled from 'styled-components';

import TestDoor from '~components/lounge/LoungeDemoData';

const LoungeDoor = () => {
  return (
    <LoungeFloor>
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
    </LoungeFloor>
  );
};

const LoungeFloor = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 320px;

  @media (max-width: 1024px) {
    bottom: 280px;
  }
`;

const Doors = styled.div`
  display: grid;
  width: 1024px;
  row-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  @media (max-width: 1024px) {
    width: 750px;
    row-gap: 90px;
  }
`;

const LoungeDoors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 154px;
  height: 220px;
  border-radius: 15px 15px 0 0;
  box-shadow: 8px 0 5px #7f7f7fb3;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 135px;
    height: 190px;
  }
`;

const NameSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;

  @media (max-width: 1024px) {
    width: 135px;
  }
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

  @media (max-width: 1024px) {
    width: 110px;
    height: 40px;
    font-size: 18px;
  }
`;

const Knob = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border-radius: 100%;
  box-shadow: 0 4px 5px #7f7f7f99;
  background-color: #7f7f7f;

  @media (max-width: 1024px) {
    width: 16px;
    height: 16px;
  }
`;

export default LoungeDoor;
