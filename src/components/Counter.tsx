import styled from 'styled-components';

import { useState } from 'react';
import Plus from './icons/ModalPlusButton';
import Minus from '../components/icons/Minus';

const Counter = () => {
  const [count, setCount] = useState<number>(100);

  const incNum = () => {
    if (count === 100) {
      setCount(100);
    } else {
      setCount(count + 5);
    }
  };

  const decNum = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 5);
    }
  };

  return (
    <Container>
      <ButtonWrapper onClick={decNum}>
        <Minus />
      </ButtonWrapper>
      {count}
      <ButtonWrapper onClick={incNum}>
        <Plus />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

const ButtonWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 25px 10px 20px;
`;

export default Counter;
