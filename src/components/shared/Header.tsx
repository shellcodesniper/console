import config from '@/lib/config'
import Link from 'next/link'
import HeaderDescription from './HeaderDescription'

import './Header.css';
import Image from 'next/image';

/**
 * The shared header component.
 */

function LogoIcon() {
  return (<div className="logo-container">
  <div className="logo-image">
    <a className="site-title" rel="author" href="/">
      <picture>
        <source srcSet="/assets/banners/LOGO_BLACK.png" type="image/png" />
        <source srcSet="/assets/banners/logo.png" type="image/png" />
        <img src="/assets/banners/LOGO_BLACK.png" alt={config.siteTitle} />
      </picture>
    </a>
  </div>
</div>);

}
export default function Header() {
  return (
    <div className="header-wrapper">
      <LogoIcon />
      <HeaderDescription />
    </div>
  );
}
