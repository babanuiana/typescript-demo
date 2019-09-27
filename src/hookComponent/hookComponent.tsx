import React, { useState } from 'react';

import './hookComponent.sass';

type Props = {
  name: string;
};

const HookComponent: React.FC<Props> = ({ name }: Props) => {
  const [count, setCount] = useState<number>(0);
  const calculate = (action: string) =>
    action === 'increment' ? setCount(count + 1) : setCount(count - 1);
  return (
    <div style={{ margin: '80px 10px' }}>
      <h2>useState example with Types</h2>
      <div className="incrementer">
        <div className="incrementer__name">{name}</div>
        <div className="incrementer__buttons">
          <div onClick={() => calculate('decrement')}>-</div>
          <div onClick={() => calculate('increment')}>+</div>
        </div>
        <div className="incrementer__count">{count}</div>
      </div>
    </div>
  );
};

export default HookComponent;
