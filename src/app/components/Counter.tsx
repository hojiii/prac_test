"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { increment, decrement, incrementByAmount } from "../stores/UserExample";

export default function Counter() {
  // 상태 가져오기
  const count = useSelector((state: RootState) => state.counter.value);
  // dispatch 함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>5만큼 증가</button>
    </div>
  );
}
