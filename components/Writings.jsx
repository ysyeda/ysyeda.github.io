'use strict';

import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import SectionHeader from 'components/SectionHeader';

const Card = (props) => {
  // <div className='subtext fs-16 c-pl'>{props.subtext}</div>
  console.log(props);
  let subtext = null;
  if (props.subtext) {
    subtext = (<div className='subtext mt-8 fs-18 serif c-pl'>{props.subtext}</div>)
  }
  return (
    <a href={props.link} className='CardWriting'>
      <div className='sans'>
        <div className='title fw-600 fs-20 ls-1 c-p'>{props.title}</div>
        {subtext}
      </div>
    </a>
)}

const Writings = (props) => (
  <div className='Work mb-48'>
    <SectionHeader name='Writings' />
    <div className=''>
      {
        props.writings.map((writing, index) => (
            <Card
              key={index}
              title={writing.data.title}
              link={prefixLink(writing.path)}
            />
        ))
      }
    </div>
  </div>
);

// <Card
//   title='Why design at a startup when starting design'
//   subtext='Almost two years ago, I landed my first design internship at a startup. When looking for an internship for my first summer at university, I solely focused on startups because I held the belief...'
//   imageWidth='48'
//   link='https://hackthenorth.com'
// />
// <Card
//   title='Super-charging React & Flux with ImmutableJS'
//   subtext='At Hootsuite, we’ve been working on restructuring our front-end architecture using React and Flux. This has given us the opportunity to explore the benefits we gains by structuring the data on the front-end ...'
//   imageWidth='48'
//   link='https://freshbooks.com'
// />

export default Writings;
