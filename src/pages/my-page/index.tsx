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
  return (
    <BackgroundMain>
      <MypageBg>
        <Title>마이페이지</Title>
        <MyPageButton>
          <ButtonMargin size="large" onClick={() => setIsModalShow(true)}>
            나의 정보
          </ButtonMargin>
          {/* mvp 제외 기능 */}
          <ButtonMargin size="large">라운지 설정</ButtonMargin>
          {/* mvp 제외 기능 */}
          <ButtonMargin size="large">라운지 검색 / 추천</ButtonMargin>
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
                <NameText>여기는 이름이 들어옴</NameText>
                <NameSaveButton>저장</NameSaveButton>
              </NameInfo>
              <LoungeBox>
                <LoungeTitle>소속 라운지</LoungeTitle>
                <LoungeInfo>
                  {LoungeList.map(lounge => (
                    <LoungeRow>
                      <LoungeName>{lounge.name}</LoungeName>
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
            }}
          >
            <p>정말로 라이언타운과 작별 인사를 하시겠습니까?</p>
            <LastAlertText>*추후 계정 복구는 불가능합니다.</LastAlertText>
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
`;

const Title = styled.button`
  font-size: 45px;
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

// 모달UI
const MyInfoTitle = styled.p`
  font-size: 30px;
  line-height: 28px;
  margin-bottom: 33px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 이름 정보

const NameTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-right: 260px;
`;

const NameInfo = styled.div`
  width: 307px;
  height: 36px;
  border: 1px solid;
  border-radius: 15px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameText = styled.p`
  font-size: 15px;
  margin: 8px 0 7px 13px;
`;

const NameSaveButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 12px;
  margin: 8px 12px 7px 0;
`;

// 라운지 정보
const LoungeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 14px;
`;

const LoungeTitle = styled.p`
  display: flex;
  justify-content: left;
  font-size: 12px;
  line-height: 18px;
  margin-left: 12px;
`;

const LoungeInfo = styled.div`
  width: 308px;
  height: 192px;
  border: 1px solid;
  border-radius: 15px;
`;

const LoungeName = styled.div`
  font-size: 12px;
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
  font-size: 12px;
  margin: 8px 12px 3px 0;
`;

// 계정 삭제 버튼
const WithdrawalButton = styled.button`
  color: #bd2517;
  font-size: 15px;
  margin: 14px 0 8px 220px;
`;

const LastAlertText = styled.p`
  font-size: 12px;
  margin: 10px 0;
`;

export default MyPage;
