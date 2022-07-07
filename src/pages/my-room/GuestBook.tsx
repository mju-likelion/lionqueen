import styled, { css } from 'styled-components';
import Potal from '~/DesignSystem/Portal';
import Arrow from '~components/icons/Arrow';
import TapeIcon from '~components/icons/Tape';
import XIcon from '~components/icons/XIcon';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '~DesignSystem/Button';

type comment = {
  id: number;
  title: string;
  content: string;
  nickname: string;
};

type Props = {
  onClose: () => void;
  comments: Array<comment>;
};

const GuestBook = ({ onClose, comments }: Props) => {
  const onClickNext = () => {
    console.log('next click!');
  };

  const onClickPrev = () => {
    console.log('prev click!');
  };

  return (
    <Potal>
      <Container>
        <Content>
          {/* top, mid, commentBox 컴포넌트화 필요 */}
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
              <Button size="small">추가</Button>
            </MemoButtonWrap>
          </MidBox>

          <CommentBox>
            {comments.map((memo: { id: number; content: string }) => (
              <MemoBox key={memo.id}>
                <Tape fill="#62fade" opacity="0.7" />
                <button type="button">{memo.content}</button>
              </MemoBox>
            ))}
          </CommentBox>
        </Content>
      </Container>
    </Potal>
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

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: scroll;
  justify-content: center;
  gap: 30px 50px;
  height: 410px;
  padding: 0 15px;
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
`;

const Tape = styled(TapeIcon)`
  position: absolute;
  top: -20px;
`;

export default GuestBook;
