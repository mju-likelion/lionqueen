import Link from 'next/link';
import styled from 'styled-components';
import React, { useState } from 'react';
import BackgroundMain from '../../DesignSystem/BackgroundMain';
import Button from '../../DesignSystem/Button';
import ConfirmModal from '~/components/ConfirmModal';

const MyPage = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <BackgroundMain>
      <MypageBg>
        <TitleStyle>마이페이지</TitleStyle>

        <ButtonStyle>
          <Link href="/MyPage/MyInfo">
            <ButtonMargin size="large">나의 정보</ButtonMargin>
          </Link>
          {/* mvp 제외 기능 */}
          <ButtonMargin size="large">라운지 설정</ButtonMargin>
          {/* mvp 제외 기능 */}
          <ButtonMargin size="large">라운지 검색 / 추천</ButtonMargin>
        </ButtonStyle>

        {isShow && (
          <ConfirmModal
            isSingle
            size="large"
            title=""
            onClose={() => {
              setIsShow(false);
            }}
            onConfirm={() => {
              setSecondShow(true);
            }}
          >
            <InfoBox>
              <MyInfoTitle>내 정보</MyInfoTitle>
              <NameBox>
                <NameTitle>이름</NameTitle>
                <NamePrintDiv>
                  <NameText>여기는 이름이 들어옴</NameText>
                  <NameSaveButton>저장</NameSaveButton>
                </NamePrintDiv>
              </NameBox>
              <LoungeBox>
                <LoungeTitle>소속 라운지</LoungeTitle>
                <LoungePrintDiv>
                  <LoungeRow>
                    <LoungeInfo>멋쟁이사자처럼 명지대</LoungeInfo>
                    <LoungeOutButton>탈퇴</LoungeOutButton>
                  </LoungeRow>
                  <LoungeRow>
                    <LoungeInfo>멋쟁이사자처럼 명지대</LoungeInfo>
                    <LoungeOutButton>탈퇴</LoungeOutButton>
                  </LoungeRow>
                  <LoungeRow>
                    <LoungeInfo>멋쟁이사자처럼 명지대</LoungeInfo>
                    <LoungeOutButton>탈퇴</LoungeOutButton>
                  </LoungeRow>
                </LoungePrintDiv>
              </LoungeBox>
              <WithdrawalButton>계정삭제</WithdrawalButton>
            </InfoBox>
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

const TitleStyle = styled.button`
  font-size: 45px;
  margin-top: 70px;
  margin-bottom: 23px;
`;

const ButtonStyle = styled.p`
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
const NameBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const NameTitle = styled.p`
  display: flex;
  justify-content: left;
  font-size: 12px;
  line-height: 18px;
  font-weight: 300;
  margin-left: 12px;
`;
const NamePrintDiv = styled.div`
  width: 307px;
  height: 36px;
  border: 1px solid #2e2e2e;
  border-radius: 15px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const NameText = styled.p`
  font-weight: 300;
  font-size: 15px;
  margin: 8px 0 8px 13px;
`;

const NameSaveButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 12px;
  margin: 8px 12px 8px 0;
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
  font-weight: 300;
  margin-left: 12px;
`;

const LoungePrintDiv = styled.div`
  width: 308px;
  height: 192px;
  border: 1px solid #2e2e2e;
  border-radius: 15px;
`;

const LoungeInfo = styled.div`
  font-weight: 300;
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
// 회원 탈퇴 버튼
const WithdrawalButton = styled.button`
  color: #bd2517;
  font-size: 15px;
  margin: 14px 0 8px 220px;
`;
export default MyPage;
