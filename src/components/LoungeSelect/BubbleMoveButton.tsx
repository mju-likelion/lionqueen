import styled from 'styled-components';

import Bubble from '../icons/Bubble';
import Left from '../icons/LeftArrow';
import Right from '../icons/RightArrow';
import group from './GroupList';

const BubbleMoveButton = () => {
  const groupList = group.map(n => (
    <div key={n.id}>
      <BubbleWrapper>
        <Bubble />
      </BubbleWrapper>
      <GroupName>{n.name}</GroupName>
    </div>
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
  height: 165px;
  width: 745px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 65px 0 60px 0;
`;

const BubbleWrapper = styled.div`
  width: 165px;
  height: 165px;
  cursor: pointer;
`;

const ArrowWrapper = styled.div`
  width: 48px;
  height: 55px;
  cursor: pointer;
`;

const GroupName = styled.span`
  width: 140px;
  height: 30px;
  position: absolute;
  margin: -95px 0 0 8px;
  display: flex;
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary.black};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`;

export default BubbleMoveButton;
