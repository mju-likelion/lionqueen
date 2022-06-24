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
      font-size: 24px;
      line-height: 28px;
    `};

  background-color: ${({ theme }) => theme.colors.primary.orange};
  color: ${props => (props.fontColor ? props.fontColor : '#2E2E2E')};
  border: 2px solid #fff38b;
  border-radius: 10px;

  :hover {
    background: linear-gradient(180deg, #f2b112 0%, #f3ca67 100%);
  }
`;
