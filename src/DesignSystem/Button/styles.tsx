import styled, { css } from 'styled-components';

// props size를 받아 size별 스타일링
export const Btn = styled.button<{ size?: 'small' | 'medium' | 'large'; fontColor?: string }>`
  ${props =>
    props.size === 'small' &&
    css`
      width: 112px;
      height: 34px;
      font-size: 18px;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 160px;
      height: 42px;
      font-size: 22px;
    `}
      ${props =>
    props.size === 'large' &&
    css`
      width: 240px;
      height: 48px;
      line-height: 28px;
      font-size: 24px;
    `}
  border: 2px solid #fff38b;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;
  color: ${props => (props.fontColor ? props.fontColor : '#2E2E2E')};
  &:disabled {
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #afafaf;
  }
  :hover {
    background: linear-gradient(180deg, #f2b112 0%, #f3ca67 100%);
  }
`;
