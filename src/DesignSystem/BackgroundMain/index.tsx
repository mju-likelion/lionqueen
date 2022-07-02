import styled from 'styled-components';
import Trees from '~components/Icons/Trees';

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

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
          <TreeContainer>
            <Trees />
            <Trees />
          </TreeContainer>
        </Board>
      </BackgroundBox>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  display: flex;
  justify-items: center;
`;

const BackgroundBox = styled.div`
  position: relative;
  min-width: 1440px;
  min-height: 1024px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 93px;

  background-image: url('/image/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1440px 1024px;
  box-shadow: none;
`;

const Board = styled.div`
  position: relative;

  width: 1014px;
  min-height: 708px;

  background-color: ${({ theme }) => theme.colors.primary.yellow};
  border: 10px solid #ffbb54;
  border-radius: 30px;
`;

const TreeContainer = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LineContainer = styled.div`
  position: absolute;
  top: -15px;

  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  gap: 440px;
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
