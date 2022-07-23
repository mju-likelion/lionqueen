import { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useAppDispatch, useAppSelector } from '~/store';
import { hideNotice } from '~/store/modules/notice';

function NoticeMessage() {
  const showNotice = useAppSelector(({ notice }) => notice.isShowNotice);
  const message = useAppSelector(({ notice }) => notice.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideNotice());
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Container isShow={showNotice}>
      <Message>{message}</Message>
    </Container>
  );
}

const Container = styled.div<{ isShow: boolean }>`
  position: fixed;
  bottom: 100px;
  left: calc(50% - 200px);
  transition: opacity 0.5s linear;
  visibility: hidden;
  opacity: 0;
  z-index: 20;
  width: 400px;
  text-align: center;

  ${({ isShow }) =>
    isShow &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const Message = styled.p`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  padding: 15px;
  text-align: center;
  white-space: pre-wrap;
`;

export default NoticeMessage;
