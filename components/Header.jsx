'use strict';

import React from 'react'

const Logo = () => (
  <div className='Logo'>
    <img src='/assets/logo.svg' width='32' />
  </div>
);

const Intro = () => (
  <div className='Intro mw720 serif fs-21 fw-normal lh-1_62'>
    <p className="mb-32">
      Hello! I'm Moaaz Sidat, a designer & developer living in Waterloo, Canada. I'm currently studying computer science at the University of Waterloo, with a heightened interest towards human-computer interaction.
    </p>
    <p className="">
      I currently work as a software developer at <a className="" href="https://freshbooks.com">FreshBooks</a>. I'm also helping build <a className="" href="https://hackthenorth.com">Hack the North</a> this year. My previous work includes engineering at <a className="" href="https://hootsuite.com">Hootsuite</a> and design at <a className="" href="https://mappedin.com">MappedIn</a>.
    </p>
  </div>
);

const Header = () => (
  <div className='Header mb-48'>
    <Logo />
    <h1 className="serif fw-normal lh-1_4 fs-42 mt-16 mb-48">designer & developer thinking about design systems<br/>& front end architecture.</h1>
    <Intro />
  </div>
);

export default Header;
