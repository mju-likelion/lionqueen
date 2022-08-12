import { NextRouter } from 'next/router';
import Axios from '~lib/axios';

type Form = {
  routerId: string;
  title: string;
  content: string;
};

export const fetchAllMemos = async (id: string, showError: () => void) => {
  try {
    const res = await Axios.get(`api/rooms/${id}/memos`, { withCredentials: true });
    return res.data;
  } catch (e: any) {
    showError();
    throw new Error('fetchAllMemos Error');
  }
};

export const fetchRoomById = async (id: string, showError: () => void, router: NextRouter) => {
  try {
    const res = await Axios.get(`/api/rooms/${id}`, { withCredentials: true });
    return res.data;
  } catch (e: any) {
    if (e.response.status === 401) {
      showError();
      router.push('/sign-in');
    }
    throw new Error('fetchRoomById Error');
  }
};

export const registMemo = async (form: Form) => {
  try {
    Axios.post(
      `/api/rooms/${form.routerId}/memos`,
      { title: form.title, content: form.content },
      { withCredentials: true },
    );
  } catch (e: any) {
    throw new Error('fetchRoomById Error', e);
  }
};
