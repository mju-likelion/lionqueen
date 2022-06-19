import { configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import reducer from './modules';

const store = configureStore({
  reducer,
});

const makeStore = (context: Context) => store;

export type RootState = ReturnType<typeof store.getState>; // Store의 state들의 타입
export type AppDispatch = typeof store.dispatch; // dispatch의 타입

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // useSelector 사용 시 state 타입을 자동으로 추론하기 위해 사용
export const useAppDispatch = () => useDispatch<AppDispatch>(); // useDispatch 사용 시, 변수 dispatch의 타입을 자동으로 추론하기 위해 사용

// next.js는 매 요청마다 서버 사이드의 스토어를 생성하기 때문에 스토어를 생성해주는 함수를 정의해서 넘겨야 한다
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
