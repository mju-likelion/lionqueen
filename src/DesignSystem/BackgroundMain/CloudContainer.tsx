import styled from 'styled-components';

const CloudContainer = () => {
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
  );
};

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

export default CloudContainer;
