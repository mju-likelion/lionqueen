import { useState } from 'react';
import styled from 'styled-components';

import Bubble from '../../public/image/Bubble.svg';
import Left from '../../public/image/leftarrow.svg';
import Right from '../../public/image/rightarrow.svg';

const Button = () => {
  type GroupType = { id: number; name: string };

  const [group, setGroup] = useState<GroupType[]>([
    {
      id: 1,
      name: '그룹이름1',
    },
    {
      id: 2,
      name: '그룹이름2',
    },
    {
      id: 3,
      name: '그룹이름3',
    },
  ]);

  const groupList = group.map(n => (
    <BubbleWrapper>
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

const GroupName = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary.black};
  position: absolute;
  margin-left: 30px;
`;

export default Button;
