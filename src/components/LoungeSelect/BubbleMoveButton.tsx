import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Bubble from '~/components/icons/Bubble';
import Left from '~/components/icons/LeftArrow';
import Right from '~/components/icons/RightArrow';
import group from './GroupList';

const BubbleMoveButton = () => {
  const groupList = group.map(n => (
    <BubbleWrapper key={n.id}>
      <Bubble />
      <GroupName>{n.name}</GroupName>
    </BubbleWrapper>
  ));

  return (
    <Container>
      <ArrowWrapper>
        <Left />
      </ArrowWrapper>
      {groupList}
      <ArrowWrapper>
        <Right />
      </ArrowWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 65px 0 60px 0;
  width: 750px;
  height: 165px;
  overflow: hidden;
`;

const BubbleWrapper = styled.button`
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
  display: flex;
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
