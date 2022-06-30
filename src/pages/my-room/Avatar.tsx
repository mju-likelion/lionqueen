import styled from 'styled-components';

const Avatar = () => {
  return (
    <AvatarBox>
      {/* 사용자 이름 패치 필요 */}
      <p>사용자이름</p>
      <img src="/image/human.png" alt="아바타" />
    </AvatarBox>
  );
};

const AvatarBox = styled.div`
  font-size: 50px;
  margin: 148px 320px auto auto;
  width: 320px;
  text-align: center;
  p {
    margin-bottom: 47px;
  }
`;

export default Avatar;
