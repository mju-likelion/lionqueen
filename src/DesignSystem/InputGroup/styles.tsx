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

export const LabelBox = styled.label<{ error?: string }>`
  width: max-content;
  margin-bottom: ${props => props.error && '16px'};
`;

export const InputBox = styled.div<{ pos?: 'up' | 'left'; dist?: number }>`
  /* margin-top: ${props => props.pos === 'up' && `${props.dist}px`}; */
`;

export const Input = styled.input`
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.primary.orange};
  border-radius: 6px;
  padding: 4px 8px;
  box-shadow: 4px;
  :focus {
    /* 색상 임의 선택, 확인 필요 */
    outline: 2px solid #ff9400;
  }
`;

export const ErrorBox = styled.div`
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 12px;
  line-height: 16px;
`;
