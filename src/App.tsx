import React from 'react';

import IMGStars from './assets/images/bg-stars.svg';
import IMGHills from './assets/images/pattern-hills.svg';

function App() {
  return (
    <div className="h-screen bg-darker-blue">
      <div className="h-full"
        style={{
          backgroundImage: "url(" + IMGHills + ")",
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}>
          <div
            className="h-full"
            style={{
              backgroundImage: "url(" + IMGStars + ")",
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}>


          </div>
        </div>
    </div>
  );
}

export default App;
