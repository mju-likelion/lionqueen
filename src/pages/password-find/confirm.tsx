import { useRouter } from 'next/router';
import styled from 'styled-components';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import Button from '~DesignSystem/Button';

const Confirm = () => {
  const router = useRouter();
  const infoText = router.query.backtoLogin;
  return (
    <BackgroundMain>
      <MainText>비밀번호 변경</MainText>
      <CrossLine />
      <InfoDiv>
        <p>{infoText || '요청하신 페이지를 찾을 수 없습니다.'}</p>
      </InfoDiv>
      <ButtonDiv>
        <Button size="large">로그인으로 돌아가기</Button>
      </ButtonDiv>
    </BackgroundMain>
  );
};
const OverLap = styled.div`
  display: flex;
  margin: 0 auto;
`;

const MainText = styled(OverLap)`
  width: 256px;
  padding-top: 44px;
  font-size: 45px;
`;

const CrossLine = styled(OverLap)`
  width: 600px;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  margin-top: 12px;
`;

const InfoDiv = styled(OverLap)`
  width: 380px;
  height: 80px;
  margin-top: 95px;
  font-size: 24px;
`;

const ButtonDiv = styled(OverLap)`
  width: 240px;
  margin-top: 77px;
`;

export default Confirm;
