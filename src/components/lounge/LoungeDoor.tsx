import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import FloorNumber from '~components/lounge/FloorDemoData';

type RoomInfo = {
  userId: string;
  userName: string;
};

const LoungeDoor = () => {
  const [roomsList, setRoomsList] = useState<RoomInfo[]>([]);

  const roomsLoading = async () => {
    try {
      const roomRes = await Axios.get(`https://api.liontown.city/api/lounges/sgIG8L`, {
        withCredentials: true,
      });
      setRoomsList(roomRes.data.data.roomData);
      return roomsList;
    } catch (err) {
      console.log('test');
    }
  };

  useEffect(() => {
    roomsLoading();
  }, []);

  return (
    <LoungeFloor roomsLength={roomsList?.length}>
      <Doors>
        {roomsList
          .slice(0)
          .reverse()
          .map(room => (
            <LoungeDoors key={room.userName}>
              <NameSpace>
                <RoomName>{room.userName}</RoomName>
              </NameSpace>
              <Knob />
            </LoungeDoors>
          ))}
      </Doors>
      <FloorWrap>
        {FloorNumber.map(floor => (
          <FloorNumContainer key={floor}>
            <FloorNum>{floor}</FloorNum>
            <FloorLine />
          </FloorNumContainer>
        ))}
      </FloorWrap>
    </LoungeFloor>
  );
};

const LoungeFloor = styled.div`
  position: relative;

  /* 라운지 개인 방이 4개 이하인 경우에 붕 뜸 현상 > margin-top 속성 필요.. */
  margin-top: ${props => (props.roomsLength <= 4 ? '320px' : '0')};
`;

const Doors = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  z-index: 3;
  width: 950px;
  row-gap: 100px;
  place-items: center;
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

const FloorWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: -20px;
  flex-direction: column;
  z-index: 0;
`;

const FloorNumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 245px;
`;

const FloorNum = styled.div`
  padding: 10px 10px 5px 0;
  width: 50px;
  height: 50px;
  text-align: center;
  font-family: NanumBarunGothic;
  font-size: 35px;
  font-weight: 800;
`;

const FloorLine = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 970px;
  height: 20px;
`;

export default LoungeDoor;
