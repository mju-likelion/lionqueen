import styled from 'styled-components';

const StickWrap = styled.div`
  display: flex;
  width: 608px;
  justify-content: space-between;
`;

const BoardStick = styled.div`
  width: 14px;
  height: 186px;
  z-index: -1;
  background-color: #665f41;
`;

const NameBoard = styled.div`
  width: 608px;
  height: 115px;
  margin: -55px 0 0 0;
  border-radius: 10px;
  color: #fff;
  z-index: 3;
  box-shadow: 0 7px 5px #7f7f7f99;
  background-color: #8d8255;

  p {
    padding: 22px 0 0 0;
    font-size: 45px;
    font-weight: 700;
    text-align: center;
  }
`;

const LoungeNameBoard = () => {
  return (
    <>
      <StickWrap>
        <BoardStick />
        <BoardStick />
      </StickWrap>
      <NameBoard>
        <p>그룹 이름</p>
      </NameBoard>
    </>
  );
};

export default LoungeNameBoard;
