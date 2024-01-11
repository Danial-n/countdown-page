import React from 'react';
import Timer from './Timer';

const Box = () => {
  // const newDay =
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col relative'>
        <div className='rounded-md bg-very-dark-blue w-20 h-12'>st</div>
        <div className='text-soft-red text-center absolute'>
          {/* {countDown.day} */}
        </div>
        <div className='rounded-md bg-desaturated-blue w-20 h-12'>sb</div>

        <div className='pt-5 text-grayish-blue'>
          <p>Days</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
