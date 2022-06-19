import styled from 'styled-components';
import BackgroundMain from '../DesignSystem/BackgroundMain';
import Button from '../DesignSystem/Button';

const MypageBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleStyle = styled.p`
  font-size: 45px;
  margin-top: 70px;
  margin-bottom: 23px;
`;
const ButtonStyle = styled.p`
  margin-top: 28px;
`;
const MyPage = () => {
  return (
    <BackgroundMain>
      <MypageBg>
        <TitleStyle>마이페이지</TitleStyle>
        <ButtonStyle>
          <Button color="primary-orange" size="large">
            나의 정보
          </Button>
        </ButtonStyle>
        <ButtonStyle>
          <Button color="primary-orange" size="large">
            라운지 설정
          </Button>
        </ButtonStyle>
        <ButtonStyle>
          <Button color="primary-orange" size="large">
            라운지 검색 / 추천
          </Button>
        </ButtonStyle>
      </MypageBg>
    </BackgroundMain>
  );
};

export default MyPage;
