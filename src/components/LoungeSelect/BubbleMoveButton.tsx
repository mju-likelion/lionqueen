import { useState } from 'react';
import styled from 'styled-components';

import Bubble from '../icons/Bubble';
import Left from '../icons/LeftArrow';
import Right from '../icons/RightArrow';
import group from './GroupList';

const BubbleMoveButton = () => {
  const groupList = group.map(n => (
    <Group>
      <BubbleWrapper key={n.id}>
        <Bubble />
      </BubbleWrapper>
      <GroupName>{n.name}</GroupName>
    </Group>
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
  height: 124px;
  width: 612px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 65px 0 60px 0;
`;

const BubbleWrapper = styled.div`
  width: 124px;
  height: 124px;
  cursor: pointer;
`;

const ArrowWrapper = styled.div`
  width: 49px;
  height: 55px;
  cursor: pointer;
`;

const Group = styled.div`
  width: 124px;
  height: 124px;
  text-overflow: ellipsis;
`;

const GroupName = styled.span`
  width: 100px;
  height: 60px;
  border: 1px solid black;
  position: absolute;
  margin: -90px 0 0 17px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary.black};
  overflow: hidden;
  white-space: wrap;
  text-overflow: '[...]';
`;

export default BubbleMoveButton;
