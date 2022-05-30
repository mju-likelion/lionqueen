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
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
`;

export const Content = styled.div<{ size: 'medium' | 'large' }>`
  width: 100%;
  height: 100%;
  ${props =>
    props.size === 'large' &&
    css`
      width: 384px;
      height: 384px;
      padding: 33px 43px;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      width: 320px;
      height: 196px;
      padding: 40px 30px;
    `}

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 30px 20px;

  text-align: center;

  background: #ffffff;
  border: 10px solid #ffab2d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const XIconWrapper = styled.span`
  position: absolute;
  right: 35px;
  top: 30px;
`;

export const Body = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;

  margin-top: 6px;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 6px;

  button {
    width: 112px !important;
    height: 38px !important;

    font-weight: 300;
    font-size: 18px !important;
  }
`;
