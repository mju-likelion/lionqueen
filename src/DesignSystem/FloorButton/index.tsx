import styled from 'styled-components';

const BtnContainer = styled.div`
  width: 122px;
  height: 122px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffe161;
`;

const FloorBtnWrap = styled.div`
  width: 80%;
  height: 90%;
  /* background-color: skyblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FloorBtn = styled.div`
  width: 66px;
  height: 10px;
  border-radius: 0.5rem;
  position: relative;
  top: 35%;
  background-color: #ffbb17;
  transform: ${props => props.downbtn && 'rotate(180deg)'};
  margin: 0 0 15% 0;
  cursor: pointer;

  .BtnTop {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -20px;
    left: 8px;
    clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
    border-radius: 0.5rem;
    transform: rotate(315deg);
    background-color: #ffbb17;
    cursor: pointer;
  }
`;

const FloorButton = () => {
  return (
    <BtnContainer>
      <FloorBtnWrap>
        <FloorBtn>
          <div className="BtnTop" />
        </FloorBtn>
        <FloorBtn downbtn>
          <div className="BtnTop" />
        </FloorBtn>
      </FloorBtnWrap>
    </BtnContainer>
  );
};

export default FloorButton;
