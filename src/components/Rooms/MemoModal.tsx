import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import usePostMemo from '~/hooks/rooms/usePostMemo';
import { Comment } from '~/lib/commentType';
import useModalOutsideClick from '~/hooks/useModalOutsideClick';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';

import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';
import Portal from '~DesignSystem/Portal';
import XIcon from '~components/icons/XIcon';

type Mode = 'create' | 'writer' | 'host' | 'general';

type Props = {
  onClose: () => void;
  comment: Comment | null;
  routerId: string;
};

const MemoModal = ({ onClose, comment, routerId }: Props) => {
  const [mode, setMode] = useState<Mode>('create');
  const dispatch = useAppDispatch();

  const showRegistNotice = () => {
    dispatch(showNotice('방명록을 등록했습니다'));
  };

  // alert를 나중에 모달로 변경하기
  const handleMemoDelete = () => {
    alert('삭제');
    onClose();
  };

  const postMemo = usePostMemo();

  // 방명록 추가, 수정
  const formik = useFormik({
    initialValues: {
      title: comment?.title || '',
      content: comment?.content || '',
      // nickname: comment?.nickname || '',
    },
    onSubmit: values => {
      postMemo.mutate({ routerId, title: values.title, content: values.content });
      showRegistNotice();
      onClose();
    },
  });

  useEffect(() => {
    // 추후 유저에 따른 상태 변화 필요
    if (comment === null) {
      setMode('create');
    } else {
      setMode('writer');
    }
  }, []);

  const testButtons: { id: number; text: string; testType: Mode }[] = [
    {
      id: 0,
      text: '생성',
      testType: 'create',
    },
    {
      id: 1,
      text: '작성자',
      testType: 'writer',
    },
    {
      id: 2,
      text: '방주인',
      testType: 'host',
    },
    {
      id: 3,
      text: '일반',
      testType: 'general',
    },
  ];

  return (
    <Portal>
      <Container {...useModalOutsideClick(onClose)}>
        <Content>
          <XIconBox onClick={onClose}>
            <XIcon color="#ffbb17" width="28" height="30" />
          </XIconBox>
          <FormContainer onSubmit={formik.handleSubmit}>
            <InputGroup id="title" fullWidth contentWidth="100%">
              <Title
                name="title"
                placeholder="제목을 입력하세요."
                value={formik.values.title}
                onChange={formik.handleChange}
                readOnly={mode === 'host' || mode === 'general'}
              />
            </InputGroup>
            <ButtonsContainer>
              {/* 유저 모드 전환 테스트 */}
              <div>
                {testButtons.map((item: { id: number; text: string; testType: Mode }) => (
                  <button type="button" key={item.id} onClick={() => setMode(item.testType)}>
                    {item.text}
                  </button>
                ))}
              </div>
              {/* api 완성 후 데이터 정제 요망 (https://github.com/mju-likelion/lionqueen/pull/29) */}
              {mode === 'create' && (
                <Button type="submit" size="small">
                  추가
                </Button>
              )}
              {mode === 'writer' && (
                <Button type="submit" size="small">
                  수정
                </Button>
              )}
              {(mode === 'writer' || mode === 'host') && (
                <Button size="small" onClick={handleMemoDelete}>
                  삭제
                </Button>
              )}
            </ButtonsContainer>
            {/* readOnly의 경우 추후 유저별 적용 필요 */}
            <MemoBody
              id="content"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              readOnly={mode === 'host' || mode === 'general'}
            />
            {/* <Writer>
              <p>-</p>
              <input id="nickname" value="글쓴이" readOnly />
              <p>-</p>
            </Writer> */}
          </FormContainer>
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

const XIconBox = styled.button`
  display: flex;
  margin: 18px 21px auto auto;
  cursor: pointer;
`;

const FormContainer = styled.form`
  margin: 23px auto;
  width: 812px;
`;

const Title = styled.input`
  height: 71px !important;
  font-size: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  margin: 14px auto;
`;

const MemoBody = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.primary.orange};
  border-radius: 15px;
  background-color: #fff3d6;
  padding: 26px 29px;
  width: 100%;
  height: 382px;
  resize: none;
  font-size: 20px;

  :focus {
    outline: 2px solid #ff9400;
  }
`;

// const Writer = styled.div`
//   display: flex;
//   gap: 8px;
//   justify-content: end;
//   margin: 4px 0;
//   font-size: 26px;

//   p {
//     margin: 0;
//   }

//   input {
//     border: 0;
//     background: none;
//     cursor: default;
//     width: 100px;
//     text-align: center;
//     font-size: 26px;
//   }

//   input:focus {
//     outline: none;
//   }
// `;

export default MemoModal;
