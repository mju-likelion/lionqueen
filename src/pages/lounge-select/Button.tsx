// 물방울 버튼
import styled from 'styled-components';

import Bubble from '../../../public/image/Bubble.svg';
import Left from '../../../public/image/leftarrow.svg';
import Right from '../../../public/image/rightarrow.svg';

const Button = () => {
  return (
    <Container>
      <ArrowWrapper>
        <Left />
      </ArrowWrapper>
      <BubbleWrapper>
        <Bubble />
      </BubbleWrapper>
      <BubbleWrapper>
        <Bubble />
      </BubbleWrapper>
      <BubbleWrapper>
        <Bubble />
      </BubbleWrapper>
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

export default Button;
