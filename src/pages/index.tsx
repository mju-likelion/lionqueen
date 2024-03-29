/* eslint-disable no-shadow */
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import ModalPopup from '~components/ModalPopup';
import BackgroundMain from '~DesignSystem/BackgroundMain';
import InputGroup from '~DesignSystem/InputGroup';
import Button from '~DesignSystem/Button';
import LoadingPage from '~DesignSystem/Loading';

import NavBar from '~/components/NavBar';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice/Notice';

const Home: NextPage = () => {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);

  const dispatch = useAppDispatch();

  function handleToastMessage() {
    dispatch(showNotice('테스트입니다. 여기에 메시지 띄울 문구를 작성하면 됩니다.'));
  }

  return (
    <main>
      <h2>자동배포가되면 여기가 바뀜123123123131313sadadasdasdadasd</h2>
      <h2>자동배포가되면 여기가 바뀜123123123131313sadadasdasdadasd</h2>
      <h2>과연 배포에 성공할까요?</h2>
      <button type="button" onClick={() => setIsShow(true)}>
        show
      </button>
      <NavBar />
      <LoadingPage />
      {/* 글자 theme 예시 */}
      <H1Skyblue>text-primary-skyblue</H1Skyblue>
      <H1Brown>text-primary-brown</H1Brown>
      <H1Yellow>text-primary-yellow</H1Yellow>
      <H1Orange>text-primary-orange</H1Orange>
      <H1Green>text-primary-green</H1Green>
      <H1Lightgreen>text-primary-lightgreen</H1Lightgreen>
      <H1DefaultText>text-text</H1DefaultText>
      <H1Placeholder>text-placeholder</H1Placeholder>

      {/* 버튼 스타일링 예시 */}
      <Button disabled size="medium">
        버튼
      </Button>
      <Button size="medium">버튼</Button>
      <Button
        size="large"
        fontColor="#fff"
        onClick={() => {
          router.push('/counter');
        }}
      >
        버튼
      </Button>

      {/* input 스타일링 예시 */}
      <InputGroup id="input" label="이름" labelPos="up" labelDist={10} fullWidth>
        <input placeholder="asdasd" name="input" />
      </InputGroup>
      <InputGroup id="test" label="이름" labelPos="up" labelDist={10}>
        <input placeholder="asdasd" name="input" />
      </InputGroup>
      <button type="button" onClick={() => setIsShow(true)}>
        show
      </button>
      <InputGroup id="test2" label="이름" labelPos="left" labelDist={20}>
        <input placeholder="asdasd" name="input" />
      </InputGroup>
      <InputGroup
        id="test3"
        label="이름"
        labelPos="left"
        labelDist={20}
        error={['에러메시지']}
        fullWidth
      >
        <input placeholder="asdasd" name="input" />
      </InputGroup>
      <InputGroup id="test4" label="이름" labelPos="left" labelDist={20} fullWidth>
        <input placeholder="asdasd" name="input" />
      </InputGroup>
      <InputGroup
        id="test5"
        label="이름"
        labelPos="left"
        labelDist={20}
        fullWidth
        contentWidth="500px"
      >
        <input placeholder="asdasd" name="input" />
      </InputGroup>
      <BackgroundMain>
        안녕하세요! 여기는 게시판 영역입니다! 내부 콘텐츠 스탕일링은 각자 해야합니다!
      </BackgroundMain>
      <button type="button" onClick={() => setIsShow(true)}>
        show
      </button>
      {isShow && (
        <ModalPopup
          isCancel
          size="large"
          title="모달 제목"
          onClose={() => {
            setIsShow(false);
          }}
          onConfirm={() => {
            setSecondShow(true);
          }}
        >
          여기는 내용이 들어옵니다. 여기는 내용이 들어옵니다. 여기는 내용이 들어옵니다. 여기는
          내용이 들어옵니다. 여기는 내용이 들어옵니다.
        </ModalPopup>
      )}
      {secondShow && (
        <ModalPopup
          size="medium"
          title="모달 제목"
          onClose={() => {
            setSecondShow(false);
          }}
          onConfirm={() => {
            setSecondShow(false);
          }}
        >
          2번째 모달은 취소가있음 isSingle안쓰면 취소생김
        </ModalPopup>
      )}
      <Button onClick={handleToastMessage}>Notice테스트</Button>
      <Notice />
    </main>
  );
};
const H1Orange = styled.h1`
  color: ${({ theme }) => theme.colors.primary.orange};
`;

const H1Skyblue = styled.h1`
  color: ${({ theme }) => theme.colors.primary.skyblue};
`;

const H1Brown = styled.h1`
  color: ${({ theme }) => theme.colors.primary.brown};
`;

const H1Yellow = styled.h1`
  color: ${({ theme }) => theme.colors.primary.yellow};
`;

const H1Green = styled.h1`
  color: ${({ theme }) => theme.colors.primary.green};
`;

const H1Lightgreen = styled.h1`
  color: ${({ theme }) => theme.colors.primary.lightgreen};
`;

const H1DefaultText = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const H1Placeholder = styled.h1`
  color: ${({ theme }) => theme.colors.placeholder};
`;

export default Home;
