import React from 'react';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className='relative md:flex md:justify-center md:items-center md:bottom-0'>
      <img
        src='./images/pattern-hills.svg'
        alt='hill'
        className='absolute w-full h-40 md:h-60'
      />
      <Icons />
    </div>
  );
};

export default Footer;
