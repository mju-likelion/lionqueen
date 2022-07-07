/* eslint-disable no-alert */
import styled from 'styled-components';
import React, { useState } from 'react';
import BackgroundMain from '~/DesignSystem/BackgroundMain';
import Button from '~/DesignSystem/Button';
import MyInfoModal from '~/components/MyPage/MyInfoModal';

const MyPage = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const onClose = () => {
    setIsModalShow(false);
  };
  const onClickPrepare = () => alert('준비 중입니다.');
  return (
    <BackgroundMain>
      <MypageBg>
        {isModalShow && <MyInfoModal onClose={onClose} />}
        <Title>마이페이지</Title>
        <MyPageButton>
          <ButtonMargin size="large" onClick={() => setIsModalShow(true)}>
            내 정보
          </ButtonMargin>
          {/* mvp 제외 기능 */}
          <ButtonMargin size="large" onClick={onClickPrepare}>
            라운지 설정
          </ButtonMargin>
          {/* mvp 제외 기능 */}
          <ButtonMargin size="large" onClick={onClickPrepare}>
            라운지 검색 / 추천
          </ButtonMargin>
        </MyPageButton>
      </MypageBg>
    </BackgroundMain>
  );
};
// 마이페이지 UI
const MypageBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  user-select: none;
`;

const Title = styled.div`
  font-size: 50px;
  margin-top: 70px;
  margin-bottom: 23px;
`;

const MyPageButton = styled.p`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const ButtonMargin = styled(Button)`
  margin-bottom: 28px;
`;

export default MyPage;
