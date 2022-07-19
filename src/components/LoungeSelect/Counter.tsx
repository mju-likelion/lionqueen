import styled from 'styled-components';

import { useState } from 'react';
import Plus from '~/components/icons/ModalPlusButton';
import Minus from '~/components/icons/Minus';

const Counter = () => {
  const [count, setCount] = useState<number>(100);

  const incNum = () => {
    if (count >= 100) {
      setCount(100);
    } else {
      setCount(count + 5);
    }
  };

  const decNum = () => {
    if (count <= 0) {
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
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: 120px;
  height: 30px;
`;

const ButtonWrapper = styled.button`
  margin: 0 25px 10px 20px;
  width: 30px;
  height: 30px;
`;

export default Counter;
