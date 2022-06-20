import styled from 'styled-components';

import { theme } from '../../styles/theme';

const BoardContainer = styled.div`
  width: 608px;
  height: 300px;
  position: absolute;
  top: -85px;
`;

const StickContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardStick = styled.div`
  width: 14px;
  height: 188px;
  z-index: 1;
  background-color: #665f41;
`;

const GroupBoard = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 10px;
  margin: -50px 0 0 0;
  box-shadow: 0 7px 5px #7f7f7f99;
  z-index: 3;
  background-color: ${theme.colors.primary.brown};
`;

const GroupName = styled.p`
  width: 608px;
  height: 100px;
  padding: 29px 0 29px 0;
  font-weight: 700;
  font-size: 40px;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
`;

const NameBoard = () => {
  return (
    <BoardContainer>
      <StickContainer>
        <BoardStick />
        <BoardStick />
      </StickContainer>
      <GroupBoard>
        <GroupName>그룹 이름</GroupName>
      </GroupBoard>
    </BoardContainer>
  );
};

export default NameBoard;
