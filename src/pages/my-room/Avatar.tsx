import styled from 'styled-components';
import Image from 'next/image';

const Avatar = () => {
  return (
    <AvatarBox>
      {/* 사용자 이름 패치 필요 */}
      <p>사용자이름</p>
      <Image src="/image/human.png" alt="아바타" width="312" height="398" />
    </AvatarBox>
  );
};

const AvatarBox = styled.div`
  margin: 148px 320px auto auto;
  width: 320px;
  text-align: center;
  font-size: 50px;

  p {
    margin-bottom: 47px;
  }
`;

export default Avatar;
