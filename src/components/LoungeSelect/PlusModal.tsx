import styled, { css, keyframes } from 'styled-components';

import React, { useState } from 'react';
import { AxiosError } from 'axios';
import Button from '~DesignSystem/Button';
import Plus from '~components/icons/ModalPlusButton';
import Minus from '~components/icons/Minus';
import InputGroup from '~DesignSystem/InputGroup';
import Modal from '~components/ModalPopup';
import InviteModal from './InviteModal';

import Axios from '~lib/axios';
import { useAppDispatch } from '~/store';
import { showNotice } from '~store/modules/notice';
import Notice from '~components/Notice';

const PlusModal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState<string>('');
  const [count, setCount] = useState<number>(100);
  const [errorShow, setErrorShow] = useState(false);
  const regex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{0,11}$/;
  const [createClicked, setCreateClicked] = useState(false);
  const [errorStatus, setErrorStatus] = useState<number>(0);
  const [inviteLink, setInviteLink] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleNotice = () => {
    if (errorStatus === 409) {
      dispatch(showNotice('이미 존재하는 라운지입니다.'));
    } else {
      dispatch(showNotice('알 수 없는 에러가 발생하였습니다. 잠시후 재시도해주세요.'));
    }
  };

  const incNum = () => {
    if (count >= 100) {
      setCount(100);
    } else {
      setCount(count + 5);
    }
  };

  const decNum = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 5);
    }
  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value);
    if (regex.test(input)) {
      setErrorShow(false);
    } else {
      setErrorShow(true);
    }
  };

  const onClickCreate = () => {
    onCreateSubmit();
  };

  const onCreateSubmit = async () => {
    try {
      const response = await Axios.post(
        `/api/lounges`,
        { limit: count, name: input },
        { withCredentials: true },
      );
      setInviteLink(response.data.data.loungeLink);
      setCreateClicked(true);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 409) {
          setErrorStatus(409);
          handleNotice();
        } else if (e.response?.status === 500 || e.response?.status === 510) {
          setErrorStatus(500);
          handleNotice();
        }
      }
    }
  };

  return (
    <Modal isCancel size="large" title="라운지 생성" onClose={onClose}>
      <InputContainer>
        <InputGroup label="그룹 이름" labelDist={10} contentWidth="283px">
          <InputText value={input} onChange={onChangeInput} />
        </InputGroup>
        {errorShow && <CautionText>한글, 영문, 숫자 포함 12자 이내로 작성해주세요.</CautionText>}
      </InputContainer>
      <PeopleContainer>
        <NumPeople>인원수</NumPeople>
        <Container>
          <ButtonWrapper onClick={decNum}>
            <Minus />
          </ButtonWrapper>
          {count}
          <ButtonWrapper onClick={incNum}>
            <Plus />
          </ButtonWrapper>
        </Container>
      </PeopleContainer>
      <Button onClick={onClickCreate}>생성</Button>
      <Notice />
      {createClicked && <CautionText loading>로 딩 중 . . .</CautionText>}
      {inviteLink && <InviteModal inviteLink={inviteLink} onClose={onClose} />}
    </Modal>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 35px auto 0;
  width: 283px;
  height: 110px;
`;

const InputText = styled.input`
  border: 3px solid ${({ theme }) => theme.colors.primary.orange};
  box-shadow: 0 3px 3px rgba(0 0 0 / 25%);
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 16px;
`;

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px auto 35px;
  width: 260px;
  height: 40px;
`;

const NumPeople = styled.p`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 16px;
`;

const CautionText = styled.p<{ loading?: boolean }>`
  ${props =>
    props.loading &&
    css`
      margin: 0 auto;
      animation: ${TextFade} 2s 1s infinite linear alternate;
      font-size: 16px;
    `}

  margin: 10px 0 0 8px;
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 13px;
`;

const TextFade = keyframes`
  0%{
    opacity: 1;
  }

  50%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: 120px;
  height: 30px;
`;

const ButtonWrapper = styled.button`
  margin: 0 30px 10px 15px;
  width: 30px;
  height: 30px;
`;

export default PlusModal;
