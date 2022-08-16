import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMemo } from '~/api/memo';

const useUpdateMemo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateMemo, {
    onSuccess: () => {
      return queryClient.invalidateQueries(['allMemo']);
    },
  });
};

export default useUpdateMemo;
