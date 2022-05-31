import styled, { css } from 'styled-components';

export const Container = styled.div<{ fullWidth?: boolean; labelPos?: 'up' | 'left' }>`
  display: flex;
  /* 기본 width 설정 시 여기(fullWidth 위)에 추가 필요 */
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  align-items: center;
  ${props =>
    props.labelPos === 'up' &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const LabelBox = styled.label`
  width: max-content;
`;

export const InputBox = styled.div<{ pos?: 'up' | 'left'; dist?: number }>`
  /* margin-top: ${props => props.pos === 'up' && `${props.dist}px`}; */
`;

export const Input = styled.input`
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.primary.orange};
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  box-shadow: 4px;
  :focus {
    /* 색상 임의 선택, 확인 필요 */
    outline: 2px solid #ff9400;
  }
`;

export const ErrorBox = styled.div`
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 0.75rem;
  line-height: 1rem;
`;
