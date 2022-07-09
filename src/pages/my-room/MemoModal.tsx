import styled from 'styled-components';
import Portal from '~DesignSystem/Portal';
import XIcon from '~components/icons/XIcon';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';

type comment = {
  id: number;
  title: string;
  content: string;
  nickname: string;
};

type Props = {
  onClose: () => void;
  comment: comment | undefined;
};

const MemoModal = ({ onClose, comment }: Props) => {
  // alert를 나중에 모달로 변경하기
  const handleMemoCreate = () => {
    alert('메모가 작성됐습니다');
  };
  const handleMemoDelete = () => {
    alert('메모가 삭제됐습니다');
  };
  const handleMemoUpdate = () => {
    alert('메모가 수정됐습니다');
  };

  return (
    <Portal>
      <Container>
        <Content>
          <XIconBox onClick={onClose}>
            <XIcon color="#ffbb17" width="28" height="30" />
          </XIconBox>
          {/* formik으로 변경 필요 */}
          <FormContainer>
            <InputGroup id="title" fullWidth>
              <Title
                id="title"
                name="input"
                placeholder="제목을 입력하세요."
                value={comment?.title}
                readOnly // 추후 유저별 적용 필요
              />
            </InputGroup>
            {/* 방장(삭제), 작성자(수정,삭제), 일반유저(읽기만) */}
            <ButtonsContainer>
              <Button size="small" onClick={handleMemoUpdate}>
                수정
              </Button>
              <Button size="small" onClick={handleMemoDelete}>
                삭제
              </Button>
            </ButtonsContainer>
            {/* readOnly의 경우 추후 유저별 적용 필요 */}
            <MemoBody value={comment?.content} readOnly />
            <Writer>{comment ? comment.nickname : '글쓴이'}</Writer>
          </FormContainer>
        </Content>
      </Container>
    </Portal>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
`;

const Content = styled.div`
  width: 920px;
  height: 630px;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  border-radius: 15px;
  overflow: hidden;
`;

const XIconBox = styled.button`
  cursor: pointer;
  display: flex;
  margin: 18px 21px auto auto;
`;

const FormContainer = styled.form`
  width: 812px;
  margin: 23px auto;
`;

const Title = styled.input`
  height: 71px !important;
  font-size: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 14px auto;
  gap: 20px;
`;

const MemoBody = styled.textarea`
  width: 100%;
  height: 382px;
  border: 2px solid ${({ theme }) => theme.colors.primary.orange};
  border-radius: 15px;
  padding: 26px 29px;
  background-color: #fff3d6;
  resize: none;
  font-size: 20px;
  :focus {
    outline: 2px solid #ff9400;
  }
`;

const Writer = styled.p`
  font-size: 26px;
  text-align: right;
  margin: 4px 0;
`;

export default MemoModal;
