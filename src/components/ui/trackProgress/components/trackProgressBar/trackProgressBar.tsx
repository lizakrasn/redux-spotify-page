import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './trackProgressBar.scss';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

export const TrackProgressBar = () => {
  const [value, setValue] = useState([50])

  return (
    <div
      className="track-progress-bar"
    >
      <Range
        values={value}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => setValue(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="track-progress-bar__container-track"
            style={{
              ...props.style,
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              className="track-progress-bar__track"
              style={{
                background: getTrackBackground({
                  values: value,
                  colors: ['#1ed760', 'rgb(66, 66, 66)'],
                  min: MIN,
                  max: MAX
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className="track-progress-bar__thumb"
            {...props}
            style={{
              ...props.style,
              cursor: 'pointer'
            }}
          >
          </div>
        )}
      />
    </div>
  );
}