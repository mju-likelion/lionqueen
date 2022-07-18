import styled from 'styled-components';

type ControlButtonsProps = {
  onScrollUp: React.MouseEventHandler<HTMLDivElement>;
  onScrollDown: React.MouseEventHandler<HTMLDivElement>;
};

const FloorButton = ({ onScrollUp, onScrollDown }: ControlButtonsProps) => {
  return (
    <BtnContainer>
      <FloorBtnWrap>
        <FloorBtn type="up" onClick={onScrollUp}>
          <BtnTop />
        </FloorBtn>
        <FloorBtn type="down" onClick={onScrollDown}>
          <BtnTop />
        </FloorBtn>
      </FloorBtnWrap>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 122px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary.yellow};

  @media (max-width: 1024px) {
    width: 105px;
    height: 105px;
    margin-bottom: 20px;
  }
`;

const FloorBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
`;

const FloorBtn = styled.div<{ type: 'up' | 'down' }>`
  position: relative;
  width: 66px;
  height: 10px;
  border-radius: 0.5rem;
  margin: 8% 0;
  transform: ${props => props.type === 'down' && 'rotate(180deg)'};
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 60px;
    height: 10px;
    margin: 8% 0 8% 0;
  }
`;

const BtnTop = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -20px;
  left: 8px;
  border-radius: 0.5rem;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
  transform: rotate(315deg);
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 47px;
    height: 47px;
    top: -18px;
    left: 6px;
  }
`;

export default FloorButton;
