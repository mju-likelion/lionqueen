import styled from 'styled-components';
import useRouter from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { scrollTo } from 'seamless-scroll-polyfill';
import Axios from 'axios';
import { getCookie } from '~lib/Cookie';

import DoorBottom from '~components/icons/DoorBottom.svg';
import NameBoard from '~components/lounge/NameBoard';
import FloorButton from '~components/lounge/FloorButton';
import LoungeDoor from '~components/lounge/LoungeDoor';
import NavBar from '~components/NavBar';

import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice/Notice';

const LoungeHome = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const floorRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  // 0: 9-10F / 1: 7-8F / 2: 5-6F / 3: 3-4F / 4: 1-2F
  const totalFloor = 4;

  const returnMessage = () => {
    dispatch(showNotice('로그인 혹은 회원가입을 진행해주세요!'));
  };

  const returnLoungeSelect = async () => {
    dispatch(showNotice('라운지 생성을 먼저 진행해주세요!'));
  };

  // 로그인 하지 않은 상태로 라운지 진입시
  useEffect(() => {
    if (getCookie('jwt')) {
      useRouter.push('/sign-in');
      returnMessage();
    }
    statusVerify();
  }, []);

  // 로그인 O 상태, 라운지 소속일 때 /라운지 소속이 아닐 때
  const statusVerify = async () => {
    try {
      // 내가 소속된 라운지 리스트
      const loungeList = await Axios.get(`https://api.liontown.city/api/lounges`, {
        withCredentials: true,
      });
      // 선택한 라운지 정보 -> {id} 부분에 임시로 값 넣음
      const selectLounge = await Axios.get(`https://api.liontown.city/api/lounges/sgIG8L`, {
        withCredentials: true,
      });
      // console.log(selectLounge.data.data.roomData);
      // 내가 소속된 라운지 리스트명과 선택한 라운지가 같지 않을 때
      // 혹은 해당 라운지가 없는 경우 라운지 생성페이지로 보내기
      if (
        loungeList.data.data[0].name !== selectLounge.data.data.loungeName.name ||
        selectLounge.status === 404
      ) {
        useRouter.push('/lounge-select');
        setTimeout(() => returnLoungeSelect(), 2000);
      }
    } catch (err) {
      // console.log 없앨 예정 ..
      console.log('error');
    }
  };

  const handleScrollUp = () => {
    if (currentFloor === 0) {
      setCurrentFloor(totalFloor);
    } else {
      setCurrentFloor(currentFloor - 1);
    }
  };

  const handleScrollDown = () => {
    if (currentFloor >= totalFloor) {
      setCurrentFloor(0);
    } else {
      setCurrentFloor(currentFloor + 1);
    }
  };

  // 렌더링 시 맨 아래로 이동구현
  useEffect(() => {
    if (floorRef.current !== null) {
      scrollTo(floorRef.current, { top: 630 * 4, behavior: 'smooth' });
    }
  }, []);

  // 버튼 누를 때
  useEffect(() => {
    if (floorRef.current !== null) {
      scrollTo(floorRef.current, { top: currentFloor * 630, behavior: 'smooth' });
    }
  }, [currentFloor]);

  return (
    <LoungeBg>
      <NameBoard />
      <ListBottomContainer>
        <Notice />
        <Bottom>
          <FloorLine />
          <BottomContainer>
            <FloorButton onScrollUp={handleScrollUp} onScrollDown={handleScrollDown} />
            <DoorBottom />
            <NavbarWrap>
              <NavBar />
            </NavbarWrap>
          </BottomContainer>
        </Bottom>
        <LoungeFloor ref={floorRef}>
          <LoungeDoor />
        </LoungeFloor>
      </ListBottomContainer>
    </LoungeBg>
  );
};

const LoungeBg = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  width: 100%;
  height: 100vh;
`;

const ListBottomContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const LoungeFloor = styled.div`
  margin-bottom: 0;
  width: 975px;
  height: 535px;
  overflow: hidden;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 970px;
`;

const FloorLine = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.brown};
  width: 970px;
  height: 20px;
`;

const NavbarWrap = styled.div`
  cursor: pointer;
`;

export default LoungeHome;
