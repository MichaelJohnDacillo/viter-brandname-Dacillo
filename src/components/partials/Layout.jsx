import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    </>
  );
};

export default Layout;