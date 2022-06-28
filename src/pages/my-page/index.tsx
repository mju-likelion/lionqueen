/* eslint-disable no-alert */
import styled from 'styled-components';
import React, { useState } from 'react';
import BackgroundMain from '~/DesignSystem/BackgroundMain';
import Button from '~/DesignSystem/Button';
import MyInfoModal from '~/components/MyPage/MyInfoModal';
import LoungeList from '~/components/MyPage/LoungeList';
import ConfirmModal from '~/components/ConfirmModal';

const MyPage = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [LoungeOutModalShow, setLoungeOutModalShow] = useState(false);
  const [WithdrawalModalShow, setWithdrawalModalShow] = useState(false);
  const [lounge, setLounge] = useState(LoungeList);

  const onClickSave = () => alert('새로운 이름을 저장했습니다.');
  const onClickPrepare = () => alert('준비 중입니다.');

  // 라운지 탈퇴
  const goodByeLounge = () => {
    if (LoungeOutModalShow) {
      alert('소속 라운지를 탈퇴했습니다.');
    }
  };

  // 라이언타운 계정 삭제
  const goodByeLionTown = () => {
    if (WithdrawalModalShow) {
      alert('라이언타운 계정을 삭제했습니다. 안녕히 가세요.');
    }
  };

  return (
    <BackgroundMain>
      <MypageBg>
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
        {isModalShow && (
          <MyInfoModal
            isSingle
            size="large"
            title=""
            onClose={() => {
              setIsModalShow(false);
            }}
          >
            <InfoBox>
              <MyInfoTitle>내 정보</MyInfoTitle>
              <NameTitle>이름</NameTitle>
              <NameInfo>
                <NameText type="text" maxLength={4} />
                <NameSaveButton onClick={onClickSave}>저장</NameSaveButton>
              </NameInfo>
              <LoungeBox>
                <LoungeTitle>소속 라운지</LoungeTitle>
                <LoungeInfo>
                  {lounge.map(Lounge => (
                    <LoungeRow key={Lounge.id}>
                      <LoungeName>{Lounge.name}</LoungeName>
                      <LoungeOutButton
                        onClick={() => {
                          setLoungeOutModalShow(true);
                        }}
                      >
                        탈퇴
                      </LoungeOutButton>
                    </LoungeRow>
                  ))}
                </LoungeInfo>
              </LoungeBox>
              <WithdrawalButton
                onClick={() => {
                  setWithdrawalModalShow(true);
                }}
              >
                계정삭제
              </WithdrawalButton>
            </InfoBox>
          </MyInfoModal>
        )}

        {/* //소속 라운지 탈퇴 모달 */}
        {LoungeOutModalShow && (
          <ConfirmModal
            size="medium"
            title="소속 라운지 탈퇴"
            onClose={() => {
              setLoungeOutModalShow(false);
            }}
            onConfirm={() => {
              setLoungeOutModalShow(false);
              goodByeLounge();
            }}
          >
            정말 [라운지이름]을 탈퇴하시겠습니까?
          </ConfirmModal>
        )}
        {/* //소속 라운지 탈퇴 모달 */}
        {WithdrawalModalShow && (
          <ConfirmModal
            size="medium"
            title="계정 삭제"
            onClose={() => {
              setWithdrawalModalShow(false);
            }}
            onConfirm={() => {
              setWithdrawalModalShow(false);
              goodByeLionTown();
            }}
          >
            <GoodbyeText>정말로 라이언타운과 작별 인사를 하시겠습니까?</GoodbyeText>
            <GoodbyeText>*추후 계정 복구는 불가능합니다.</GoodbyeText>
          </ConfirmModal>
        )}
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

// 내 정보 모달UI
const MyInfoTitle = styled.p`
  font-size: 35px;
  line-height: 28px;
  margin-bottom: 27px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
`;

// 이름 정보

const NameTitle = styled.p`
  font-size: 20px;
  line-height: 18px;
  margin-right: 260px;
  margin-bottom: 5px;
`;

const NameInfo = styled.div`
  width: 315px;
  height: 41px;
  border: 1px solid;
  border-radius: 15px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameText = styled.input`
  font-size: 18px;
  margin: 8px 0 7px 13px;
  outline: none;
`;

const NameSaveButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 16px;
  margin: 8px 12px 7px 0;
`;

// 라운지 정보
const LoungeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
`;

const LoungeTitle = styled.p`
  display: flex;
  justify-content: left;
  font-size: 20px;
  line-height: 18px;
  margin-left: 11px;
  margin-bottom: 5px;
`;

const LoungeInfo = styled.div`
  width: 315px;
  height: 192px;
  border: 1px solid;
  border-radius: 15px;
`;

const LoungeName = styled.div`
  font-size: 16px;
  margin: 8px 0 3px 13px;
`;

const LoungeRow = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const LoungeOutButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 16px;
  margin: 8px 12px 3px 0;
`;

// 계정 삭제 버튼
const WithdrawalButton = styled.button`
  color: #bd2517;
  font-size: 17px;
  margin: 14px 0 8px 230px;
`;

const GoodbyeText = styled.p`
  font-size: 17px;
  margin: 10px 0;
`;

export default MyPage;
