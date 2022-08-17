import React, { useEffect, useState, useRef } from 'react';
import { AxiosError } from 'axios';
import styled, { css } from 'styled-components';
import { scrollTo } from 'seamless-scroll-polyfill';

import { useRouter } from 'next/router';
import Bubble from '~components/icons/Bubble';
import Arrow from '~components/icons/BubbleArrow';
import group from './GroupList';

import Axios from '~lib/axios';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice';

type Lounge = {
  id: string;
  name: string;
};

const BubbleMoveButton = () => {
  const loungeRef = useRef<HTMLDivElement>(null);
  const loungeTotal = useRef<number>(Math.ceil(group.length / 3) - 1);
  const [currentLounge, setCurrentLounge] = useState<number>(0);
  const [lounges, setLounges] = useState<Lounge[]>([]);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleNotice = () => {
    dispatch(showNotice('알 수 없는 에러가 발생하였습니다. 잠시후 재시도 해주세요.'));
  };

  const onClickPrev = () => {
    if (currentLounge === 0) {
      setCurrentLounge(loungeTotal.current);
    } else {
      setCurrentLounge(currentLounge - 1);
    }
  };

  const onClickNext = () => {
    if (currentLounge >= loungeTotal.current) {
      setCurrentLounge(0);
    } else {
      setCurrentLounge(currentLounge + 1);
    }
  };

  const fetchLounges = async () => {
    try {
      const response = await Axios.get(`api/lounges`, { withCredentials: true });
      setLounges(response.data.data);
    } catch (e) {
      if (e instanceof AxiosError)
        if (e.response?.status === 401) {
          handleNotice();
          router.push('/sign-in');
        }
    }
  };

  useEffect(() => {
    fetchLounges();
  });

  useEffect(() => {
    if (loungeRef.current !== null) {
      scrollTo(loungeRef.current, { left: currentLounge * 580, behavior: 'smooth' });
    }
  }, [currentLounge]);

  const onClickLounge = (id: string) => {
    router.push(`/lounge/${id}}`);
  };

  const groupList = lounges.map(lounges => (
    <BubbleWrapper key={lounges.id} onClick={() => onClickLounge(lounges.id)}>
      <Bubble />
      <GroupName>{lounges.name}</GroupName>
    </BubbleWrapper>
  ));

  return (
    <Container>
      <ArrowWrapper onClick={onClickPrev}>
        <Arrow />
      </ArrowWrapper>
      <BubbleContainer ref={loungeRef}>{groupList}</BubbleContainer>
      <ArrowWrapper onClick={onClickNext} left>
        <Arrow />
      </ArrowWrapper>
      <Notice />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 65px 0 60px;
  width: 690px;
  height: 180px;
`;

const BubbleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 600px;
  height: 180px;
  overflow: hidden;
`;

const BubbleWrapper = styled.button`
  margin: 0 13px;
  cursor: pointer;
  width: 165px;
  height: 165px;
`;

const ArrowWrapper = styled.button<{ left?: boolean }>`
  cursor: pointer;
  width: 55px;
  height: 55px;
  ${props =>
    props.left &&
    css`
      transform: rotate(0.5turn);
    `}
`;

const GroupName = styled.span`
  display: block;
  position: absolute;
  margin: -95px 0 0 8px;
  cursor: pointer;
  width: 140px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 18px;
`;

export default BubbleMoveButton;
