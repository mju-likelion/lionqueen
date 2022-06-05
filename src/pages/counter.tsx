import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '~/store';
import * as counterActions from '../store/modules/counter';

export default function Counter() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(({ counter }) => counter.value);

  const plus = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const minus = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <button type="button" onClick={minus}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={plus}>
        +
      </button>
    </div>
  );
}
