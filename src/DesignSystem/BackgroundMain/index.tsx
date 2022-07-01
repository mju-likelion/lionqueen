import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import TreeIcon from '~components/icons/Trees';

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
        </Board>
        <Tree left="15%" />
        <Tree left="74%" />
      </BackgroundBox>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  display: flex;
  justify-items: center;
`;

const BackgroundBox = styled.div`
  width: 1440px;
  height: 1024px;
  position: absolute;
  display: flex;
  justify-items: center;
  background-image: url('/image/wallpaper.svg');
  background-repeat: no-repeat;
  background-position: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Board = styled.div`
  width: 1014px;
  min-height: 708px;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  border: 10px solid #ffbb54;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

const Tree = styled(TreeIcon)<{ left?: string }>`
  position: absolute;
  top: 65%;
  left: ${props => props.left || '0'};
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
`;

const ContentContainer = styled.div`
  width: 912px;
  min-height: 542px;
  margin: 102px auto 48px auto;
  border-radius: 15px;
  background-color: #ffffffcc;
`;

export default BackgroundMain;
