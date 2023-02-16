import React from 'react';
import HeaderNavBar from './HeaderNavbar';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <div>
        <HeaderNavBar />
      {children}
      <Footer />
    </div>
  )
}
