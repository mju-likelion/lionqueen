/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Flower from '~components/icons/Flower';

const Custom404 = () => {
  const router = useRouter();
  const handleRoutePush = (path: string) => {
    window.open(path, '_blank');
  };

  const FlowerButton = [
    {
      id: 0,
      name: '연빈',
      fill: '#8979ee',
      path: 'https://www.wanted.co.kr/',
    },
    { id: 1, name: '예빈', fill: '#ef9c65', path: 'https://www.google.co.kr/' },
    { id: 2, name: '한조', fill: '#41d3ff', path: 'https://playoverwatch.com/ko-kr/' },
    {
      id: 3,
      name: '수진',
      fill: '#ffad9f',
      path: 'http://sports.khu.ac.kr/02/05_01.php',
    },
    {
      id: 4,
      name: '민정',
      fill: '#ff7979',
      path: 'https://ko.wikihow.com/%EC%88%98%ED%95%99-%EC%9E%98-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95',
    },
    {
      id: 5,
      name: '재민',
      fill: '#edbd4e',
      path: 'http://school.gyo6.net/yeonan/',
    },
    {
      id: 6,
      name: '성연',
      fill: '#F88D19',
      path: 'https://www.starbucks.co.kr/index.do',
    },
    {
      id: 7,
      name: '민철',
      fill: '#7092ff',
      path: 'https://www.instagram.com/challenge/?next=/mju_cdc/',
    },
    { id: 8, name: '수정', fill: '#b0fbff', path: 'https://www.paris.co.kr/' },
    {
      id: 9,
      name: '소연',
      fill: '#d88eff',
      path: 'https://www.nintendo.co.kr/software/switch/acbaa/index.html',
    },
    {
      id: 10,
      name: '유라',
      fill: '#ff93d0',
      path: 'https://www.google.com/search?q=%EC%A0%A4%EB%A6%AC%EC%82%AC%EC%A3%BC%EC%84%B8%EC%9A%94&oq=%EC%A0%A4%EB%A6%AC%EC%82%AC%EC%A3%BC%EC%84%B8%EC%9A%94&aqs=chrome..69i57j69i60.2500j0j1&sourceid=chrome&ie=UTF-8',
    },
  ];

  return (
    <Wrapper404>
      <Container404>
        <TextBox>
          <Title404>💖404 Error💖</Title404>
          <Text404>Page Not Found : 당신은 왜 이곳에 오게 되었습니까?</Text404>
          <Text404>여기 불쌍한 당신을 도울 수 있는 착한 친구들이 있습니다.</Text404>
          <Text404>당신에게는 많은 친구가 있고, 이 중 한 명의 손을 잡으세요.</Text404>
          <GoToHome type="button" onClick={() => router.push('/')}>
            당신은 혼자가 아닙니다...
          </GoToHome>
        </TextBox>
        <FlowerContainer>
          {FlowerButton.map(({ name, fill, path }) => (
            <FlowerBox key={name} onClick={() => handleRoutePush(path)} aria-hidden>
              <Flower fill={fill} />
              <FlowerName>{name}</FlowerName>
            </FlowerBox>
          ))}
        </FlowerContainer>
      </Container404>
    </Wrapper404>
  );
};

const Wrapper404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background-color: #b7e4b7;
  padding: 30px;
  user-select: none;
`;

const Container404 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  border-radius: 40px;
  background-color: #fff;
  padding: 20px;
`;

const Title404 = styled.p`
  margin: 15px auto;
  font-size: 60px;
`;

const Text404 = styled.p`
  font-size: 17px;
`;

const FlowerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border-radius: 20px;
  width: 700px;
  height: auto;
`;

const GoToHome = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    transform: scale(1.5);
    color: #ff6030;
  }
`;

const FlowerBox = styled.div`
  cursor: pointer;

  &:hover {
    transform: scaleY(1.2);
  }
`;

const FlowerName = styled.p`
  margin-bottom: 28px;
  text-align: center;
`;

export default Custom404;
