import styled from 'styled-components';

import { theme } from '../../styles/theme';

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 122px;
  margin: 23px 0 0 0;
  border-radius: 100%;
  background-color: ${theme.colors.primary.yellow};
`;

const EachBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  margin: 6px 0 0 0;
`;

const EachBtn = styled.div`
  position: relative;
  width: 66px;
  height: 10px;
  border-radius: 0.5rem;
  margin: 8% 0 15% 0;
  transform: ${props => props.downBtn && 'rotate(180deg)'};
  background-color: ${theme.colors.primary.orange};
  cursor: pointer;
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
  background-color: ${theme.colors.primary.orange};
  cursor: pointer;
`;

const FloorButton = () => {
  return (
    <BtnContainer theme={theme}>
      <EachBtnWrap>
        <EachBtn>
          <BtnTop />
        </EachBtn>
        <EachBtn downBtn>
          <BtnTop />
        </EachBtn>
      </EachBtnWrap>
    </BtnContainer>
  );
};

export default FloorButton;
