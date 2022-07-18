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
  position: absolute;
  top: -7px;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 280px;

  @media screen and (max-height: 900px) {
    top: -35px;
  }
`;

const StickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 475px;
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
  width: 500px;
  height: 80px;
`;

const GroupName = styled.p`
  margin: 0;
  padding: 16px 0 10px 0;
  width: 500px;
  height: 80px;
  text-align: center;
  color: #fff;
  font-size: 43px;
  font-weight: 700;
`;

export default NameBoard;
