import React from 'react';

import TimerBoxComp from './TimerBoxComp';

function TimerComp() {


  return (
    <div className="grid grid-cols-1 auto-rows-max gap-8 md:grid-cols-4 xs:grid-cols-2">
      <TimerBoxComp value={40} label="days" />
      <TimerBoxComp value={40} label="hours" />
      <TimerBoxComp value={40} label="minutes" />
      <TimerBoxComp value={40} label="seconds" />
    </div>
  )
}

export default TimerComp;
