import React from 'react';
import { useRecoilValue } from 'recoil';
import { isShowNotice, noticeMessage } from 'src/atoms/notice';
import styled, { css } from 'styled-components';

function Notice() {
  const message = useRecoilValue(noticeMessage);
  const showNotice = useRecoilValue(isShowNotice);

  return (
    <Container isShow={showNotice}>
      <Message>{message}</Message>
    </Container>
  );
}

const Container = styled.div<{ isShow: boolean }>`
  width: 400px;
  position: fixed;
  bottom: 100px;
  left: calc(50% - 200px);
  text-align: center;
  transition: all 0.7s ease-in 0.1s;

  ${({ isShow }) =>
    isShow
      ? css`
          visibility: 'visible';
          opacity: 1;
        `
      : css`
          visibility: 'hidden';
          opacity: 0;
        `};
`;

const Message = styled.p`
  padding: 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  white-space: pre-wrap;
  text-align: center;
`;

export default Notice;
