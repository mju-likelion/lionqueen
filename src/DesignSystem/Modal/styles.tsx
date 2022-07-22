import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 40%);
  width: 100%;
  height: 100%;
`;
export const Title = styled.header`
  margin-bottom: 5px;
  width: 100%;
  line-height: 36px;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
`;
export const Content = styled.div<{ size: 'large' | 'medium' | 'small' }>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 10px solid #ffab2d;
  border-radius: 30px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  background: #fff;
  padding: 30px 20px;
  width: 100%;
  height: 100%;
  text-align: center;

  ${props =>
    props.size === 'large' &&
    css`
      padding: 33px 43px;
      width: 520px;
      height: 478px;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      padding: 40px 30px;
      width: 450px;
      height: auto;
    `}

    ${props =>
    props.size === 'small' &&
    css`
      padding: 40px 30px;
      width: 400px;
      height: auto;
    `}
`;

export const XIconWrapper = styled.button`
  position: absolute;
  top: 30px;
  right: 35px;
`;

export const Body = styled.div`
  margin-top: 6px;
  width: 100%;
  line-height: 22px;
  font-size: 16px;
  font-weight: 300;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 12px;
  width: 100%;

  button {
    width: 112px !important;
    height: 38px !important;
    font-size: 18px !important;
    font-weight: 300;
  }
`;
