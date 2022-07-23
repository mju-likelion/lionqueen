/* eslint-disable no-alert */
import React, { useState } from 'react';
import styled from 'styled-components';
import { LoungeList } from '~components/MyPage/constant';
import ModalPopup from '~components/ModalPopup';

const MyInfo = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('이유라');
  const [loungeOutModalShow, setLoungeOutModalShow] = useState(false);
  const [withdrawalModalShow, setWithdrawalModalShow] = useState(false);
  const onClickSave = () => {
    alert('새로운 이름을 저장했습니다.');
    setName(name);
    console.log(name);
  };

  // 라운지 탈퇴
  const goodByeLounge = () => {
    if (loungeOutModalShow) {
      alert('소속 라운지를 탈퇴했습니다.');
    }
  };

  // 라이언타운 계정 삭제
  const goodByeLionTown = () => {
    if (withdrawalModalShow) {
      alert('라이언타운 계정을 삭제했습니다. 안녕히 가세요.');
    }
  };
  console.log(name);
  return (
    <div>
      <ModalPopup size="large" title="내 정보" onClose={onClose} isCancel>
        <InfoBox>
          <NameBox>
            <NameTitle>이름</NameTitle>
            <NameInfo>
              <NameText
                type="text"
                maxLength={5}
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <NameSaveButton onClick={onClickSave}>저장</NameSaveButton>
            </NameInfo>
          </NameBox>
          <LoungeBox>
            <LoungeTitle>소속 라운지</LoungeTitle>
            <LoungeInfo>
              {LoungeList.map(lounge => (
                <LoungeRow key={lounge.id}>
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
      </ModalPopup>

      {/* //소속 라운지 탈퇴 모달 */}
      {loungeOutModalShow && (
        <ModalPopup
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
        </ModalPopup>
      )}
      {/* //소속 라운지 탈퇴 모달 */}
      {withdrawalModalShow && (
        <ModalPopup
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
        </ModalPopup>
      )}
    </div>
  );
};

// 내 정보 모달UI

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

// 이름 정보

const NameBox = styled.div`
  width: 315px;
`;

const NameTitle = styled.p`
  margin-bottom: 5px;
  margin-left: 10px;
  text-align: left;
  line-height: 18px;
  font-size: 20px;
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 15px;
  width: 315px;
  height: 41px;
`;

const NameText = styled.input`
  margin: 8px 0 7px 13px;
  border: none;
  font-size: 18px;

  :focus {
    outline: none;
  }
`;

const NameSaveButton = styled.button`
  margin: 8px 12px 7px 0;
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 16px;
`;

// 라운지 정보
const LoungeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const LoungeTitle = styled.p`
  margin-bottom: 5px;
  margin-left: 10px;
  text-align: left;
  line-height: 18px;
  font-size: 20px;
`;

const LoungeInfo = styled.div`
  border: 1px solid;
  border-radius: 15px 5px 5px 15px;
  width: 315px;
  height: 192px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.primary.lightgreen}; /* 스크롤바의 색상 */
    height: 30%; /* 스크롤바의 길이 */
  }

  &::-webkit-scrollbar-track {
    background: rgb(255 144 224 / 10%); /* 스크롤바 뒷 배경 색상 */
  }
`;

const LoungeName = styled.div`
  display: block;
  margin: 8px 0 3px 13px;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
`;

const LoungeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const LoungeOutButton = styled.button`
  margin: 8px 12px 3px 0;
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 16px;
`;

// 계정 삭제 버튼
const WithdrawalButton = styled.button`
  margin: 14px 0 8px 230px;
  color: #bd2517;
  font-size: 17px;
`;

const GoodbyeText = styled.p`
  margin: 10px 0;
  font-size: 17px;
`;

export default MyInfo;
