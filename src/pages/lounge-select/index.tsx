import styled from 'styled-components';

import BackgroundMain from '../../DesignSystem/BackgroundMain';
import Button from './Button';
import Plus from '../../../public/image/plus.svg';

const LoungeSelect = () => {
  return (
    <BackgroundMain>
      <Container>
        <TitleContainer>
          <Title>라운지 선택</Title>
          <Line />
        </TitleContainer>
        <Button />
        <PlusWrapper>
          <Plus />
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
`;

export default LoungeSelect;
