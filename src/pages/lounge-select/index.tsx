import styled from 'styled-components';

import { useState } from 'react';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~/components/LoungeSelect/BubbleMoveButton';
import Plus from '~/components/icons/Plus';
import PlusModal from '~/components/LoungeSelect/PlusModal';

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
  width: 612px;
  height: 700px;
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 25px;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 576px;
  height: 130px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

const Title = styled.p`
  font-size: 36px;
  margin-top: 58px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

const PlusWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
`;

export default LoungeSelect;
