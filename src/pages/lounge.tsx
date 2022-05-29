import styled from 'styled-components';

import DoorBottom from '../../public/image/DoorBottom.svg';

const LoungeBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #c5e5ff;
`;

const DoorList = styled.div`
  width: 1024px;
  height: 100%;
  background-color: yellowgreen;
`;

const Lounge = () => {
  return (
    <LoungeBg>
      <DoorList />
      <DoorBottom />
    </LoungeBg>
  );
};

export default Lounge;
