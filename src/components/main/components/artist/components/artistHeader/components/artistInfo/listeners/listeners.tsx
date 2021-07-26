import React from 'react';
import './listeners.scss';

interface ListenersProps {
  count: number;
}

export const Listeners = ({count}: ListenersProps) => {
  return (
    <div className="listeners">
      <p className="listeners__count">{new Intl.NumberFormat().format(count)}</p>
      <p className="listeners__label">Monthly Listeners</p>
    </div>
  )
}