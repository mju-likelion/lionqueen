import styled from 'styled-components';

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
  top: -7px;
  width: 500px;
  height: 280px;

  @media (max-height: 900px) {
    top: -35px;
  }
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
  margin-top: -18px;
  border-radius: 10px;
  box-shadow: 0 7px 5px #7f7f7f99;
  background-color: ${({ theme }) => theme.colors.primary.brown};
`;

const GroupName = styled.p`
  display: block;
  width: 430px;
  height: 80px;
  margin: 0;
  padding: 16px 10px 10px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
  font-size: 43px;
  color: #fff;
`;

export default NameBoard;
