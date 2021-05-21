import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  
    return (
        <Fragment>
            <Header />
            <main>
                <div className="container maincontainer">
                    { children }
                </div>
            </main>
            <Footer />
        </Fragment>
  );
}


export default Layout