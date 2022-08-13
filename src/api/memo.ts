import axios from 'axios';
import { NextRouter } from 'next/router';
import Axios from '~lib/axios';

type Form = {
  routerId: string;
  title: string;
  content: string;
};

export const fetchRoomById = async (id: string, showError: () => void, router: NextRouter) => {
  try {
    const res = await Axios.get(`/api/rooms/${id}`, { withCredentials: true });
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          showError();
          router.push('/sign-in');
        }
      }
      throw new Error('fetchRoomById Error');
    }
  }
};

export const fetchAllMemos = async (id: string, showError: () => void) => {
  try {
    const res = await Axios.get(`/api/rooms/${id}/memos`, { withCredentials: true });
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      showError();
      throw new Error('fetchAllMemos Error');
    }
  }
};

export const registMemo = async (form: Form) => {
  try {
    await Axios.post(
      `/api/rooms/${form.routerId}/memos`,
      { title: form.title, content: form.content },
      { withCredentials: true },
    );
  } catch (e) {
    if (e instanceof Error) {
      throw new Error('registMemo Error', e);
    }
  }
};
