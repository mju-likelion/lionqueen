import styled from 'styled-components';

import { useState } from 'react';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~components/LoungeSelect/BubbleMoveButton';
import Plus from '~components/icons/Plus';
import PlusModal from '~components/LoungeSelect/PlusModal';

const LoungeSelect = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const onClose = () => {
    setIsModalShow(false);
  };

  return (
    <BackgroundMain>
      {isModalShow && <PlusModal onClose={onClose} />}
      <Container>
        <TitleContainer>
          <Title>라운지 선택</Title>
        </TitleContainer>
        <Button />
        <PlusWrapper onClick={() => setIsModalShow(true)}>
          <Plus />
        </PlusWrapper>
      </Container>
    </BackgroundMain>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 25px;
  width: 612px;
  height: 600px;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.black};
  width: 576px;
  height: 130px;
`;

const Title = styled.p`
  margin-top: 58px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 36px;
`;

const PlusWrapper = styled.div`
  margin: 0 auto -100px;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export default LoungeSelect;
