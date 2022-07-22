import styled, { css } from 'styled-components';

export const Container = styled.div<{ fullWidth?: boolean; labelPos: 'up' | 'left'; dist: number }>`
  display: flex;
  /* 기본 width 설정 시 여기(fullWidth 위)에 추가 필요 */
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  align-items: flex-start;
  ${props =>
    props.labelPos === 'up' &&
    css`
      gap: ${props.dist}px;
      flex-direction: column;
    `}
  ${props =>
    props.labelPos === 'left' &&
    css`
      gap: ${props.dist}px;
      flex-direction: row;

      > label {
        margin-top: 7px;
      }
    `}
`;

export const LabelBox = styled.label<{ error?: string[] }>`
  min-width: fit-content;
`;

export const Content = styled.div`
  width: 100%;
`;

export const InputBox = styled.div<{ pos?: 'up' | 'left'; dist?: number }>`
  width: 100%;

  > input {
    width: 100%;
    height: 38px;
    border: 2px solid ${({ theme }) => theme.colors.primary.orange};
    border-radius: 10px;
    padding: 4px 8px;

    &:focus {
      /* 색상 임의 선택, 확인 필요 */
      outline: 2px solid #ff9400;
    }
  }
`;

export const ErrorBox = styled.div`
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
`;
