import styled from 'styled-components';

import TestDoor from '~components/lounge/LoungeDemoData';

const LoungeDoor = () => {
  return (
    <LoungeFloor>
      <Doors>
        {TestDoor.slice(0)
          .reverse()
          .map(item => (
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
  display: flex;
  position: absolute;
  bottom: 320px;
  flex-direction: column;

  /* bottom: 203px; */

  @media (max-width: 1024px) {
    bottom: 178px;
  }
`;

const Doors = styled.div`
  display: grid;
  row-gap: 100px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  width: 1024px;

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

  @media (max-width: 1024px) {
    width: 135px;
    height: 190px;
  }
`;

const NameSpace = styled.div`
  display: flex;
  align-items: center;
  width: 154px;

  @media (max-width: 1024px) {
    width: 135px;
  }
`;

const RoomName = styled.p`
  display: block;
  margin: 0;
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

  @media (max-width: 1024px) {
    width: 110px;
    height: 40px;
    font-size: 18px;
  }
`;

const Knob = styled.div`
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
