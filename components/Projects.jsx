'use strict';

import React from 'react'

import SectionHeader from 'components/SectionHeader';

const Card = (props) => {
  const filename = (props.title.toLowerCase().replace(/\s+/g, ''));
  // const filepath = `/assets/${filename}.svg`;

  const style = {
    borderColor: props.color,
  }

  let link;
  if (props.link) {
    link = props.link;
  } else if (props.github) {
    link = props.github;
  }

  let website = null;
  if (props.link) {
    website = <a className='link br-r' href={props.link}>Website</a>
  }

  let github = null;
  if (props.github) {
    github = <a className='link' href={props.github}>Github</a>
  }

  return (
    <a href={link} className='CardProject' style={style}>
      <div className='w-100p sans info'>
        <div className='title fw-600 fs-20 ls-1 c-p'>{props.title}</div>
        <div className='subtext fs-16 mt-8 lh-1_4 c-pl'>{props.subtext}</div>
      </div>
      <div className='w-100p links sans ttu'>
        {website}
        {github}
      </div>
    </a>
)}

const Projects = (props) => (
  <div className='Work mb-48'>
    <SectionHeader name='Projects' />
    <div className='flex'>
      <Card
        title='immutable.py'
        subtext='Immutable collections for Python'
        color='#4A4A4A'
        github='https://github.com/moaazsidat/immutable.py'
      />
      <Card
        title='Gips'
        subtext='A Mac App for simple image processing'
        color='#4A4A4A'
        link="http://moaazsidat.com/gips"
      />
      <Card
        title='ClearSkies'
        subtext='Safer drone flying'
        color='#32267B'
        github='https://github.com/moaazsidat/clearskies-server'
      />
      <Card
        title='Remembralll'
        subtext='Visual and audible content based video search'
        color='#1DCADD'
        link='http://moaazsidat.com/rememberalll/'
      />
    </div>
  </div>
);

export default Projects;
