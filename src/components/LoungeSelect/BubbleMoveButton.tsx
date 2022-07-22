import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { scrollTo } from 'seamless-scroll-polyfill';

import Bubble from '~components/icons/Bubble';
import Left from '~components/icons/LeftArrow';
import Right from '~components/icons/RightArrow';
import group from './GroupList';

const BubbleMoveButton = () => {
  const loungeRef = useRef<HTMLDivElement>(null);
  const loungeTotal = useRef<number>(Math.ceil(group.length / 3) - 1);
  const [currentLounge, setCurrentLounge] = useState<number>(0);

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

  useEffect(() => {
    if (loungeRef.current !== null) {
      scrollTo(loungeRef.current, { left: currentLounge * 580, behavior: 'smooth' });
    }
  }, [currentLounge]);

  const groupList = group.map(n => (
    <BubbleWrapper key={n.id}>
      <Bubble />
      <GroupName>{n.name}</GroupName>
    </BubbleWrapper>
  ));

  return (
    <Container>
      <ArrowWrapper onClick={onClickPrev}>
        <Left />
      </ArrowWrapper>
      <BubbleContainer ref={loungeRef}>{groupList}</BubbleContainer>
      <ArrowWrapper onClick={onClickNext}>
        <Right />
      </ArrowWrapper>
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
  margin: 0 15px;
  cursor: pointer;
  width: 165px;
  height: 165px;
`;

const ArrowWrapper = styled.button`
  cursor: pointer;
  width: 55px;
  height: 55px;
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
