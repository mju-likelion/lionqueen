import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

type BackgroundProps = {
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

function BackgroundMain(props: BackgroundProps) {
  const { children, ...restProps } = props;

  return (
    <PageContainer>
      <BackgroundBox>
        <Board>
          <LineContainer>
            <LineStyles />
            <LineStyles />
          </LineContainer>
          <ContentContainer {...restProps}>{children}</ContentContainer>
          <img src="/image/trees.svg" alt="나무" />
        </Board>
      </BackgroundBox>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  display: flex;
  justify-items: center;
`;

const BackgroundBox = styled.div`
  min-height: 1024px;
  min-width: 100%;
  position: relative;
  display: flex;
  justify-items: center;
  background-image: url('/image/wallpaper.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const Board = styled.div`
  width: 1014px;
  height: 708px;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  border: 10px solid #ffbb54;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

const LineContainer = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -15px;
  left: 25%;
  right: 25%;
  margin: 0 auto;
`;

const LineStyles = styled.div`
  width: 16px;
  height: 118px;
  border-radius: 10px;
  background-color: #cd853f;
  /* padding-bottom: 10px; */
`;

const ContentContainer = styled.div`
  width: 912px;
  height: 542px;
  margin: 102px auto auto auto;
  border-radius: 15px;
  background-color: #ffffffcc;
`;

export default BackgroundMain;
