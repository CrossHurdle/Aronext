import React from 'react';
import HeaderNavBar2 from './HeaderNavbar2/index';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <div>
        <HeaderNavBar2 />
      {children}
      <Footer />
    </div>
  )
}