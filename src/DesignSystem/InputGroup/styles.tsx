import styled, { css } from 'styled-components';

export const Container = styled.div<{
  fullWidth?: boolean;
  labelPos: 'up' | 'left';
  dist: number;
  contentWidth?: string;
}>`
  display: flex;

  /* 기본 width 설정 시 여기(fullWidth 위)에 추가 필요 */
  align-items: flex-start;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  ${props =>
    props.labelPos === 'up' &&
    css`
      flex-direction: column;
      gap: ${props.dist}px;
    `}
  ${props =>
    props.labelPos === 'left' &&
    css`
      flex-direction: row;
      gap: ${props.dist}px;

      > label {
        margin-top: 7px;
      }
    `}
`;

export const LabelBox = styled.label<{ error?: string[] }>`
  min-width: fit-content;
`;

export const Content = styled.div<{ contentWidth?: string }>`
  width: ${props => props.contentWidth};
`;

export const InputBox = styled.div<{ pos?: 'up' | 'left'; dist?: number }>`
  width: 100%;

  > input {
    border: 2px solid ${({ theme }) => theme.colors.primary.orange};
    border-radius: 10px;
    padding: 4px 8px;
    width: 100%;
    height: 38px;

    &:focus {
      /* 색상 임의 선택, 확인 필요 */
      outline: 2px solid #ff9400;
    }
  }
`;

export const ErrorBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 5px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary.error};
  font-size: 12px;
`;
