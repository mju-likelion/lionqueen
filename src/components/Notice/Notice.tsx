import { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useAppDispatch, useAppSelector } from '~/store';
import * as noticeActions from '~/store/modules/notice';

type messageProps = {
  contents: string;
};

function NoticeMessage({ contents }: messageProps) {
  const showNotice = useAppSelector(({ notice }) => notice.isShowNotice);
  const message = contents;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(noticeActions.isNotShow());
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, [showNotice]);

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
  transition: all 1s ease-in 0;
  z-index: 20;
  width: 400px;
  text-align: center;

  ${({ isShow }) =>
    isShow
      ? css`
          visibility: 'visible';
          opacity: 1;
        `
      : css`
          visibility: 'hidden';
          opacity: 0;
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
