import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const NameBoard = () => {
  const [loungeName, setLoungeName] = useState<string>('');

  const settingLoungeName = async () => {
    try {
      const res = await Axios.get(`https://api.liontown.city/api/lounges/sgIG8L`, {
        withCredentials: true,
      });
      setLoungeName(res.data.data.loungeName.name);
    } catch (err) {
      console.log('error');
    }
  };

  useEffect(() => {
    settingLoungeName();
  }, []);

  return (
    <BoardContainer>
      <StickContainer>
        <BoardStick />
        <BoardStick />
      </StickContainer>
      <GroupBoard>
        <GroupName>{loungeName}</GroupName>
      </GroupBoard>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 150px;
`;

const StickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;

const BoardStick = styled.div`
  background-color: #665f41;
  width: 14px;
  height: 70px;
`;

const GroupBoard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -18px;
  border-radius: 10px;
  box-shadow: 0 7px 5px #7f7f7f99;
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 475px;
  height: 78px;
`;

const GroupName = styled.p`
  display: block;
  margin: 0;
  padding: 18px 10px 10px;
  width: 430px;
  height: 80px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`;

export default NameBoard;
