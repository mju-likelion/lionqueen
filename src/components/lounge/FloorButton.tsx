import styled from 'styled-components';

const FloorButton = () => {
  return (
    <BtnContainer>
      <FloorBtnWrap>
        <FloorBtn type="up">
          <BtnTop />
        </FloorBtn>
        <FloorBtn type="down">
          <BtnTop />
        </FloorBtn>
      </FloorBtnWrap>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 23px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  width: 122px;
  height: 122px;
`;

const FloorBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  width: 80%;
  height: 90%;
`;

const FloorBtn = styled.div<{ type: 'up' | 'down' }>`
  position: relative;
  transform: ${props => props.type === 'down' && 'rotate(180deg)'};
  margin: 8% 0 15% 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;
  width: 66px;
  height: 10px;
`;

const BtnTop = styled.div`
  position: absolute;
  top: -20px;
  left: 8px;
  transform: rotate(315deg);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;
  width: 50px;
  height: 50px;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
`;

export default FloorButton;
