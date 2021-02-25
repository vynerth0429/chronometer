import React from 'react';

import IMGStars from './assets/images/bg-stars.svg';
import IMGHills from './assets/images/pattern-hills.svg';

import FooterComp from './components/FooterComp';
import CreditsComp from './components/CreditsComp';
import TimerComp from './components/TimerComp';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-darkest-blue to-dark-blue">
      <div className="h-full"
        style={{
          backgroundImage: "url(" + IMGHills + ")",
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}>
          <div
            className="h-full"
            style={{
              backgroundImage: "url(" + IMGStars + ")",
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}>

            <div className="py-8 h-full flex flex-col justify-between">
              <div className="mt-8 flex flex-col items-center space-y-12 md:mt-28 md:space-y-24">
                <span className="text-light font-bold text-lg tracking-3xl text-center">
                  WE'RE LAUNCHING SOON
                </span>

                <div>
                  <TimerComp />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <FooterComp />
                <CreditsComp />
              </div>
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
