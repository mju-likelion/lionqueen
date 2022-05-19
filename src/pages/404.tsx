/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRouter } from 'next/router';
import Heart from '../../public/image/heart.svg';

const Custom404 = () => {
  const router = useRouter();
  const handleRoutePush = (path: string) => {
    window.open(path, '_blank');
  };

  const heartButton = [
    {
      name: '연빈',
      color: '#8979EE',
      path: 'https://www.wanted.co.kr/',
    },
    {
      name: '예빈',
      color: '#F6B890',
      path: 'https://www.google.co.kr/',
    },
    {
      name: '한조',
      color: '#51C8ED',
      path: 'https://playoverwatch.com/ko-kr/',
    },
    {
      name: '수진',
      color: '#FDD01C',
      path: 'http://sports.khu.ac.kr/02/05_01.php',
    },
  ];

  const heartButton2 = [
    {
      name: '민정',
      color: '#E8535D',
      path: 'https://skyeduac.conects.com/',
    },
    {
      name: '재민',
      color: '#5eed4e',
      path: 'http://school.gyo6.net/yeonan/',
    },
    {
      name: '성연',
      color: '#F88D19',
      path: 'https://www.starbucks.co.kr/index.do',
    },
    {
      name: '민철',
      color: '#6161AB',
      path: 'https://www.instagram.com/challenge/?next=/mju_cdc/',
    },
    {
      name: '수정',
      color: '#FFD9FB',
      path: 'https://www.paris.co.kr/',
    },
    {
      name: '소연',
      color: '#AF7ECA',
      path: 'https://www.nintendo.co.kr/software/switch/acbaa/index.html',
    },
    {
      name: '유라',
      color: '#ADFF2F',
      path: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=130850',
    },
  ];
  return (
    <div className="flex flex-col items-center mt-20">
      <p className="text-7xl text-red-400">💖404 Error💖</p>
      <p className="text-7xl mt-10">Page Not Found</p>
      <p className="text-4xl mt-20">당신은 왜 이곳에 오게 되었습니까?</p>
      <p className="text-2xl mt-7">여기 불쌍한 당신을 도울 수 있는 착한 친구들이 있습니다.</p>
      <p className="text-2xl mt-7">
        당신에게는 많은 친구가 있고, 이 중 한 명의 손을 잡는 걸 권장합니다.
      </p>
      <div className="flex flex-col mt-14">
        <div className="flex ">
          {heartButton.map(({ name, color, path }) => (
            <div
              key={name}
              onClick={() => handleRoutePush(path)}
              aria-hidden
              className="cursor-pointer"
            >
              <Heart className="mr-11 text-4xl" fill={color} />
              <p className="mr-11 text-4xl">{name}</p>
            </div>
          ))}
          {heartButton2.map(({ name, color, path }) => (
            <div
              key={name}
              onClick={() => handleRoutePush(path)}
              aria-hidden
              className="cursor-pointer"
            >
              <Heart className="mr-11 text-4xl" fill={color} />
              <p className="mr-11 text-4xl">{name}</p>
            </div>
          ))}
          <div />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="mt-16 text-red-600 text-3xl cursor-pointer"
          onClick={() => router.push('/')}
        >
          당신은 혼자가 아닙니다...
        </button>
      </div>
    </div>
  );
};

export default Custom404;
