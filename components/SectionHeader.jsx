'use strict';

import React from 'react'

const SectionHeader = (props) => (
  <div className='SectionHeader'>
    <div className='w-40 h-4 bgc-p mb-16'></div>
    <h1 className='ttu sans fs-32 fw-700 ls-2 c-pd'>{props.name}</h1>
  </div>
);

export default SectionHeader;
