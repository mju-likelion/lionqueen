import styled, { css } from 'styled-components';

export const Container = styled.div<{ fullWidth?: boolean; labelPos?: 'up' | 'left' }>`
  display: flex;
  /* 기본 width 설정 시 여기(fullWidth 위)에 추가 필요 */
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  ${props =>
    props.labelPos === 'up' &&
    css`
      flex-direction: column;
      /* align-items: center; */
    `}
`;

export const LabelBox = styled.label`
  width: max-content;
`;

export const InputBox = styled.div<{ pos?: 'up' | 'left'; dist?: number }>`
  /* margin-top: 0.25rem; */
  margin-top: ${props => props.pos === 'up' && `${props.dist}px`};
  margin-bottom: ${props => props.pos !== 'up' && `${props.dist}px`};
  margin-bottom: ${props => props.pos !== 'up' && `${props.dist}px`};
`;

export const Input = styled.input`
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.primary.orange};
  /* border-color: red; */
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  ::placeholder {
    background-color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const ErrorBox = styled.div`
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 0.75rem;
  line-height: 1rem;
`;
