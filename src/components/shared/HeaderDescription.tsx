'use client'

import Navigation from 'next/navigation'

type Route = '/' | '/about' | '/blog' | '/link'

const description: {[key in Route]: string} = {
  '/': 'Home',
  '/about': 'About',
  '/blog': 'Blog',
  '/link': 'Links',
}

function LinkList() {
  return (
    <div className="link-wrapper">
      <ul>
        <li>
          <a href="/">
            {description['/']}
          </a>
        </li>
        <li>
          <a href="/about">
            {description['/about']}
          </a>
        </li>
        <li>
          <a href="/blog">
            {description['/blog']}
          </a>
        </li>
        <li>
          <a href="/link">
            {description['/link']}
          </a>
        </li>
      </ul>
    </div>
  );
}

const HeaderDescription = () => {
  return (
  <div className="header-items-container">
    <div className="header-items left">
      <span className="title-font">BDEV.IO or QL.GL</span>
    </div>
    <div className="header-items right">
      <LinkList />
    </div>
  </div>
  )
}

export default HeaderDescription
