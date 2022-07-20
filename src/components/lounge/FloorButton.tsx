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
  align-items: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  width: 122px;
  height: 122px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    width: 105px;
    height: 105px;
  }
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
  margin: 8% 0;
  border-radius: 0.5rem;
  width: 66px;
  height: 10px;

  @media (max-width: 1024px) {
    margin: 8% 0;
    width: 60px;
    height: 10px;
  }
`;

const BtnTop = styled.div`
  position: absolute;
  top: -20px;
  left: 8px;
  transform: rotate(315deg);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;

  @media (max-width: 1024px) {
    top: -18px;
    left: 6px;
    width: 47px;
    height: 47px;
  }
`;

export default FloorButton;
