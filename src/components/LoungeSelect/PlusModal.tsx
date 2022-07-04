import styled from 'styled-components';

import { useState } from 'react';
import Button from '~DesignSystem/Button';
import ModalForm from './ModalForm';
import Counter from './Counter';

const PlusModal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState('');
  const [maxLength, setMaxLength] = useState(0);
  const [errorShow, setErrorShow] = useState(false);
  // const regex = /[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g;

  const onChangeInput = (e: { target: { value: string } }) => {
    setInput(e.target.value);
    if (input) {
      setMaxLength(12);
      if (input.length > 12) {
        setErrorShow(true);
      } else {
        setErrorShow(false);
      }
    }
  };

  return (
    <ModalForm isSingle size="large" title="라운지 생성" onClose={onClose}>
      <InputContainer>
        <InputTitle>그룹 이름</InputTitle>
        <InputText value={input} onChange={onChangeInput} maxLength={maxLength} />
        {errorShow && <CautionText>한글, 영문, 숫자 포함 12자 이내로 작성해주세요.</CautionText>}
      </InputContainer>
      <PeopleContainer>
        <NumPeople>인원수</NumPeople>
        <Counter />
      </PeopleContainer>
      <Button>생성</Button>
    </ModalForm>
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
