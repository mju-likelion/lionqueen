/* eslint-disable @typescript-eslint/no-empty-function */

import styled from 'styled-components';

import { useState } from 'react';
import Button from '~DesignSystem/Button';
import Modal from '~DesignSystem/Modal';
import Counter from './Counter';

type Props = {
  children: React.ReactNode;
  title: string;
  size: 'large';
  onCreate: () => void;
  onClose?: () => void;
};

const PlusModal = ({
  children,
  title = '라운지 생성',
  size = 'large',
  onCreate,
  onClose,
}: Props) => {
  const [input, setInput] = useState('');
  const [maxLength, setMaxLength] = useState(0);
  const [errorShow, setErrorShow] = useState(false);
  const checkLang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  const onChangeInput = (e: { target: { value: string } }) => {
    setInput(e.target.value);

    if (checkLang.test(input) === true) {
      setMaxLength(10);
      if (input.length > 10) {
        // 에러
        setErrorShow(true);
      }
    } else {
      setMaxLength(14);
      if (input.length > 14) {
        // 에러
        setErrorShow(true);
      }
    }
  };

  return (
    <Modal title={title} size={size}>
      <Modal.Body>
        <InputContainer>
          <InputTitle>그룹 이름</InputTitle>
          <InputText value={input} onChange={onChangeInput} maxLength={maxLength} />
          {errorShow && <CautionText>한글 10자, 영문 14자 이내로 작성해주세요.</CautionText>}
        </InputContainer>
        <PeopleContainer>
          <NumPeople>인원수</NumPeople>
          <Counter />
        </PeopleContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCreate}>생성</Button>
      </Modal.Footer>
    </Modal>
  );
};

const InputContainer = styled.div`
  width: 283px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 35px;
`;

const InputTitle = styled.p`
  font-size: 16px;
  margin: 0 0 11px 8px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

const InputText = styled.input`
  width: 283px;
  height: 38px;
  border: 2px solid ${({ theme }) => theme.colors.primary.orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 16px;
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

const PeopleContainer = styled.div`
  width: 240px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 35px;
`;

const NumPeople = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.black};
`;

// 글자수 초과시 에러 메시지 출력
const CautionText = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary.error};
  margin: 10px 0 0 8px;
`;

export default PlusModal;
