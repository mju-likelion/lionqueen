import styled from 'styled-components';
import Tree from '~components/icons/Tree';
import CloudContainer from './CloudContainer';

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

function BackgroundMain(props: BackgroundProps) {
  const { children, ...restProps } = props;

  return (
    <PageContainer>
      <BackgroundBox>
        <CloudContainer />
        <Board>
          <LineContainer>
            <LineStyles />
            <LineStyles />
          </LineContainer>
          <ContentContainer {...restProps}>{children}</ContentContainer>
          <TreeContainer>
            <Tree />
            <Tree />
          </TreeContainer>
        </Board>
      </BackgroundBox>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  width: 100%;
  height: 100%;
`;

const BackgroundBox = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  box-shadow: none;
  background-image: url('../../image/backgoundNoCloud.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1440px 1024px;
  padding-top: 93px;
  min-width: 1440px;
  min-height: 1024px;
`;

const Board = styled.div`
  position: relative;
  border: 10px solid #ffbb54;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  width: 1014px;
  min-height: 708px;
`;

const TreeContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: -60px;
  left: 0;
  justify-content: space-between;
  width: 100%;
`;

const LineContainer = styled.div`
  display: flex;
  position: absolute;
  top: -15px;
  gap: 440px;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const LineStyles = styled.div`
  border-radius: 10px;
  background-color: #cd853f;
  width: 16px;
  height: 118px;
`;

const ContentContainer = styled.div`
  margin: 102px auto 48px;
  border-radius: 15px;
  background-color: #fffc;
  width: 912px;
  min-height: 542px;
`;

export default BackgroundMain;
