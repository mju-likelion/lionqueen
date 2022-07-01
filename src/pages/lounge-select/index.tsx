import styled from 'styled-components';

import { useState } from 'react';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '../../components/LoungeSelect/BubbleMoveButton';
import Plus from '../../components/icons/Plus';
import PlusModal from '~/components/LoungeSelect/PlusModal';

const LoungeSelect = () => {
  const [clicked, setClicked] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const closeModal = () => {
    if (isClosed) {
      setClicked(false);
    }
  };

  const createLounge = () => {
    setClicked(true);
    setIsClosed(false);
  };

  return (
    <BackgroundMain>
      <Container>
        <TitleContainer>
          <Title>라운지 선택</Title>
          <Line />
        </TitleContainer>
        <Button />
        <PlusWrapper onClick={createLounge}>
          <Plus />
          {clicked && (
            <PlusModal
              size="large"
              title=""
              onClose={() => {
                setIsClosed(true);
              }}
            />
          )}
        </PlusWrapper>
      </Container>
    </BackgroundMain>
  );
};

const Container = styled.div`
  width: 612px;
  height: 542px;
  display: flex;
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 496px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 36px;
  margin-top: 58px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

const Line = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.black};
`;

const PlusWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
`;

export default LoungeSelect;
