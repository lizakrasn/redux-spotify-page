import React from 'react';
import { TrackProgressBar } from './components/trackProgressBar/trackProgressBar';
import './trackProgress.scss';

export const TrackProgress = () => {
  return (
    <div className="track-progress">
      <p className="track-progress__start">0:01</p>
      <TrackProgressBar />
      <p className="track-progress__end">3:07</p>
    </div>
  )
}