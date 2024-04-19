import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * @typedef {'mount' | 'update' | 'nested-update'} PhaseType
 * @param {string} id 어떤 트리인지 확인하는 고유한 id
 * @param {PhaseType} phase 트리가 어떤 단계에 있는지 확인하는 문자열
 * @param {number} actualDuration 현재 업데이트에 대해 <Profiler> 및 하위 컴포넌트들을 렌더링하는 데 걸린 시간(ms), updated phase에는 크게 감소해야 최적화가 잘 된
 *   것으로 볼 수 있음
 * @param {number} baseDuration 최적화가 되어있지 않는 최악의 렌더링 비용을 추정한 시간(ms)
 * @param {number} startTime 현재 업데이트 렌더링을 시작한 시점에 대한 숫자 타임스탬프
 * @param {number} commitTime 현재 업데이트를 커밋한 시점의 타임스탬프
 */
const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  console.table({ id, phase, actualDuration, baseDuration, startTime, commitTime });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profiler id='app' onRender={onRender}>
      <App />
    </Profiler>
  </React.StrictMode>
);
