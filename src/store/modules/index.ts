/* modules 내에서 정의한 모듈들을 합쳐주는 역할을 한다. */

import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counter, { CounterState } from './counter';
import notice, { NoticeState } from './notice';

export type State = {
  counter: CounterState;
  notice: NoticeState;
};

const reducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    /*
      SSR작업 수행 시 HYDRATE라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
      next.js에선 서버 사이드와 클라이언트 사이드에서 각각 스토어가 생성되기 때문에 이 둘을 합쳐주는 작업이 필요한데 이것을 hydrate라고 한다
      */
    case HYDRATE:
      return action.payload;

    default: {
      return combineReducers({
        counter,
        notice,
      })(state, action);
    }
  }
};
export default reducer;
