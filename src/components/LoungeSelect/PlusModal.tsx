import styled from 'styled-components';

import { useState } from 'react';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';
import Counter from './Counter';
import Modal from '~components/ModalPopup';

type Input = {
  input: string;
};

const PlusModal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState<string>('');
  const [errorShow, setErrorShow] = useState(false);
  const regex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{0,11}$/;

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value);
    if (regex.test(input)) {
      setErrorShow(false);
    } else {
      setErrorShow(true);
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
        <Counter />
      </PeopleContainer>
      <Button onClick={onClose}>생성</Button>
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

// 글자수 초과시 에러 메시지 출력
const CautionText = styled.p`
  margin: 10px 0 0 8px;
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 13px;
`;

export default PlusModal;
