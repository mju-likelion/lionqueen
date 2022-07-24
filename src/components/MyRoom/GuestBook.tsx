/* eslint-disable no-unsafe-optional-chaining */
import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { scrollTo } from 'seamless-scroll-polyfill';
import Arrow from '~components/icons/Arrow';
import TapeIcon from '~components/icons/Tape';
import XIcon from '~components/icons/XIcon';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';
import Portal from '~/DesignSystem/Portal';
import { Comment } from '~/lib/commentType';
import useModalOutsideClick from '~/hooks/useModalOutsideClick';

type Props = {
  onClose: () => void;
  handleSecondModalClick: (id: number | null) => void;
  comments: Array<Comment>;
};

const GuestBook = ({ onClose, handleSecondModalClick, comments }: Props) => {
  // 모달창 크기에 최대 메모장 10개 보임 => 즉, 10개당 1슬라이드를 의미 나머지 발생 시 + 1
  const slideRef = useRef<HTMLDivElement>(null);
  const slideTotal = useRef<number>(Math.ceil(comments?.length / 10) - 1);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // prev 클릭 시 현재 슬라이드를 -1, next 클릭은 +1, 각각 처음 혹은 끝이면 반대 방향으로 이동
  const onClickPrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slideTotal.current);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onClickNext = () => {
    if (currentSlide >= slideTotal.current) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // DOM 직접 제어 방식
  // useEffect(() => {
  //   if (slideRef.current !== null) {
  //     slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  //   }
  // }, [currentSlide]);

  useEffect(() => {
    if (slideRef.current !== null) {
      scrollTo(slideRef.current, { left: currentSlide * 920, behavior: 'smooth' });
    }
  }, [currentSlide]);

  return (
    <Portal>
      <Container {...useModalOutsideClick(onClose)}>
        <Content>
          <TopBox>
            <Title>방명록</Title>
            <XIconBox onClick={onClose}>
              <XIcon color="#ffbb17" width="28" height="30" />
            </XIconBox>
            <SlideButtonWrap>
              <SlideButtonBox type="button" onClick={onClickPrev}>
                <Arrow />
              </SlideButtonBox>
              <SlideButtonBox type="button" left onClick={onClickNext}>
                <Arrow />
              </SlideButtonBox>
            </SlideButtonWrap>
          </TopBox>

          <MidBox>
            <InputGroup id="search" contentWidth="336px">
              <input placeholder="찾고 싶은 키워드를 입력하세요." />
            </InputGroup>
            <MemoButtonWrap>
              <Button size="small">삭제</Button>
              <Button size="small" onClick={() => handleSecondModalClick(null)}>
                +추가
              </Button>
            </MemoButtonWrap>
          </MidBox>

          <CommentWrap ref={slideRef}>
            {comments?.map((memo: { id: number; title: string }) => (
              <MemoBox key={memo.id}>
                <Tape fill="#62fade" opacity="0.7" />
                <button type="button" onClick={() => handleSecondModalClick(memo.id)}>
                  <p>{memo.title}</p>
                  {/* <p>{memo.nickname}</p> */}
                </button>
              </MemoBox>
            ))}
          </CommentWrap>
        </Content>
      </Container>
    </Portal>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: #0006;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  width: 920px;
  height: 630px;
  overflow: hidden;
`;

const TopBox = styled.div`
  position: relative;
  margin: 25px 25px auto;
`;

const Title = styled.p`
  margin: 0;
  text-align: center;
  font-size: 80px;
`;

const XIconBox = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const SlideButtonWrap = styled.div`
  display: flex;
  position: absolute;
  top: 58px;
  justify-content: space-between;
  width: 100%;
`;

const SlideButtonBox = styled.button<{ left?: boolean }>`
  cursor: pointer;
  ${props =>
    props.left &&
    css`
      transform: rotate(0.5turn);
    `}
`;

const MidBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 45px 25px 17px;
`;

const MemoButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 15px;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 30px 50px;
  justify-content: center;
  transition: 0.3s ease-out;
  padding: 0 15px;
  height: 410px;
  overflow-x: hidden;
`;

const MemoBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  transform: rotate(0.02turn);
  height: fit-content;

  button {
    background-color: #fff3eb;
    cursor: pointer;
    width: 142px;
    height: 161px;
  }

  p {
    padding: 0 6px;
    width: 118px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Tape = styled(TapeIcon)`
  position: absolute;
  top: -20px;
`;

export default GuestBook;
