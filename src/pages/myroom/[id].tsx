import { useRouter } from 'next/router';

const MyRoom = () => {
  const router = useRouter();
  return (
    <>
      <p>마이룸입니다!</p>
      <p>방 번호는 {router.query.id}입니다!</p>
    </>
  );
};

export default MyRoom;
