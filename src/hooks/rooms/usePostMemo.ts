import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registMemo } from '~/api/memo';

const usePostMemo = () => {
  const queryClient = useQueryClient();
  return useMutation(registMemo, {
    onSuccess: () => {
      return queryClient.invalidateQueries();
    },
  });
};

export default usePostMemo;
