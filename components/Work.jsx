'use strict';

import React from 'react'

import SectionHeader from 'components/SectionHeader';

const Card = (props) => {
  const filename = (props.title.toLowerCase().replace(/\s+/g, ''));
  const filepath = `/assets/${filename}.svg`;
  
  return (
    <a href={props.link} className='Card'>
      <div className='mr-16'>
        <img width={props.imageWidth ? props.imageWidth : '32'} src={filepath} />
      </div>
      <div className='sans'>
        <div className='title fw-600 fs-20 ls-1 c-p'>{props.title}</div>
        <div className='subtext fs-16 c-pl'>{props.subtext}</div>
      </div>
    </a>
)}

const Work = (props) => (
  <div className='Work mb-48'>
    <SectionHeader name='Work' />
    <div className='flex'>
      <Card
        title='FreshBooks'
        subtext='Software Developer Co-op'
        imageWidth='48'
        link='https://freshbooks.com'
      />
      <Card
        title='Hack the North'
        subtext='Platform Developer'
        imageWidth='48'
        link='https://hackthenorth.com'
      />
      <Card
        title='Hootsuite'
        subtext='Software Engineering Intern'
        link='https://hootsuite.com'
      />
      <Card
        title='MappedIn'
        subtext='Product Design Intern'
        imageWidth='24'
        link='https://mappedin.com'
      />
    </div>
  </div>
);

export default Work;
