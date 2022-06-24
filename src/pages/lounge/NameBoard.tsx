import styled from 'styled-components';

import { theme } from '../../styles/theme';

const NameBoard = () => {
  return (
    <BoardContainer>
      <StickContainer>
        <BoardStick />
        <BoardStick />
      </StickContainer>
      <GroupBoard>
        <GroupName>멋쟁이사자처럼 명지대</GroupName>
      </GroupBoard>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -35px;
  width: 500px;
  height: 280px;
`;

const StickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 475px;
`;

const BoardStick = styled.div`
  width: 14px;
  height: 70px;
  background-color: #665f41;
`;

const GroupBoard = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 80px;
  margin: -18px 0 0 0;
  border-radius: 10px;
  box-shadow: 0 7px 5px #7f7f7f99;
  background-color: ${theme.colors.primary.brown};
`;

const GroupName = styled.p`
  width: 500px;
  padding: 10px 0 10px 0;
  text-align: center;
  font-weight: 700;
  font-size: 43px;
  color: #fff;
`;

export default NameBoard;
