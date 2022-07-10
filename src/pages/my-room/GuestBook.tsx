import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Arrow from '~components/icons/Arrow';
import TapeIcon from '~components/icons/Tape';
import XIcon from '~components/icons/XIcon';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';
import Portal from '~/DesignSystem/Portal';
import { Comment } from './CommentType';

type Props = {
  onClose: () => void;
  handleSecondModalClick: (id: number | null) => void;
  comments: Array<Comment>;
};

const GuestBook = ({ onClose, handleSecondModalClick, comments }: Props) => {
  // 모달창 크기에 최대 메모장 10개 보임 => 즉, 10개당 1슬라이드를 의미 나머지 발생 시 + 1
  const slideRef = useRef<HTMLDivElement>(null);
  const slideTotal = useRef<number>(Math.ceil(comments.length / 10) - 1);
  const [currentSlide, setCurrentSlide] = useState(0);

  // prev 클릭 시 현재 슬라이드를 -1, next 클릭은 +1, 각각 처음 혹은 끝이면 반대 방향으로 이동
  const onClickPrev = () => {
    if (currentSlide === 0) setCurrentSlide(slideTotal.current);
    else setCurrentSlide(currentSlide - 1);
  };

  const onClickNext = () => {
    if (currentSlide >= slideTotal.current) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    if (slideRef.current != null)
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Portal>
      <Container>
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
            {/* inputGroup은 차후 contentWidth 적용하기 */}
            <InputGroup id="search">
              <input id="search" placeholder="찾고 싶은 키워드를 입력하세요." />
            </InputGroup>
            <MemoButtonWrap>
              <Button size="small">삭제</Button>
              <Button size="small" onClick={() => handleSecondModalClick(null)}>
                +추가
              </Button>
            </MemoButtonWrap>
          </MidBox>

          <CommentWrap ref={slideRef}>
            {comments.map((memo: { id: number; title: string; nickname: string }) => (
              <MemoBox key={memo.id}>
                <Tape fill="#62fade" opacity="0.7" />
                <button type="button" onClick={() => handleSecondModalClick(memo.id)}>
                  <p>{memo.title}</p>
                  <p>{memo.nickname}</p>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
`;

const Content = styled.div`
  width: 920px;
  height: 630px;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  border-radius: 15px;
  overflow: hidden;
`;

const TopBox = styled.div`
  position: relative;
  margin: 25px 25px auto 25px;
`;

const Title = styled.p`
  font-size: 80px;
  text-align: center;
  margin: 0;
`;

const XIconBox = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

const SlideButtonWrap = styled.div`
  position: absolute;
  top: 58px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  justify-content: end;
  align-items: center;
  margin: 45px 25px 17px 25px;
`;

const MemoButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  gap: 10px;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 50px;
  height: 410px;
  padding: 0 15px;
  transition: 0.3s ease-out;
  /* overflow-x: hidden; */
`;

const MemoBox = styled.div`
  position: relative;
  transform: rotate(0.02turn);
  display: flex;
  justify-content: center;
  height: fit-content;

  button {
    background-color: #fff3eb;
    width: 142px;
    height: 161px;
    cursor: pointer;
  }

  p {
    width: 118px;
    padding: 0 6px;
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
