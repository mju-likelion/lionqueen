import styled from 'styled-components';
import Tree from '~components/icons/Tree';

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

function BackgroundMain(props: BackgroundProps) {
  const { children, ...restProps } = props;
  const clouds = [
    {
      id: 0,
      width: '194px',
      height: '118px',
      right: '0',
    },
    {
      id: 1,
      width: '316px',
      height: '156px',
      right: '50%',
    },
    {
      id: 2,
      width: '208px',
      height: '116px',
      right: '10%',
    },
  ];

  return (
    <PageContainer>
      <BackgroundBox>
        <CloudBox>
          {clouds.map(cloud => (
            <img
              src="/image/cloud.png"
              key={cloud.id}
              alt="구름"
              width={cloud.width}
              height={cloud.height}
            />
          ))}
        </CloudBox>
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

  /* s3에 이미지 업로드 필요 */
  background-image: url('image/backgoundNoCloud.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1440px 1024px;
  padding-top: 93px;
  min-width: 1440px;
  min-height: 1024px;
`;

const CloudBox = styled.div`
  @keyframes cloud-flow {
    0% {
      right: 0;
    }

    10% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    100% {
      right: 100%;
      opacity: 0;
    }
  }

  position: absolute;
  top: 0;
  min-width: 1440px;
  min-height: 1024px;

  img {
    position: absolute;
    right: 0;
    opacity: 0;
    animation: cloud-flow 1s linear infinite;
  }

  img:nth-child(1) {
    top: 3%;
    animation-duration: 12s;
    animation-delay: 0;
  }

  img:nth-child(2) {
    top: 25%;
    animation-duration: 17s;
    animation-delay: -0.8s;
  }

  img:nth-child(3) {
    top: 45%;
    animation-duration: 14s;
    animation-delay: 1.5s;
  }
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
