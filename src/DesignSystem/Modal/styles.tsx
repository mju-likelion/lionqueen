import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.header`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
`;

export const Content = styled.div<{ size?: 'medium' | 'large' }>`
  ${props =>
    props.size === 'large' &&
    css`
      width: 384px;
      height: 384px;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 320px;
      height: 192px;
    `}


    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 30px;

  text-align: center;

  background: #ffffff;
  border: 10px solid #ffab2d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const Body = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;

  margin-top: 6px;
`;
