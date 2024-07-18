// layout.tsx
import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './Styles/globals.css';
import { Inter } from 'next/font/google';
import Map from './Components/Map/Index.js';
import Video from './Components/Video/Video'
import Cards from './Components/Cards';
import { BiLogoBootstrap } from 'react-icons/bi';
import LogBar from './Components/LogBar';
const inter = Inter({ subsets: ['latin'] });
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />
        <div style={{ display: 'flex' }}>
          {/* Sidebar */}
          <Sidebar />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
           
               
 {/* Map */}
            <div style={{ marginTop: '0px', marginLeft: '30px', flex: '1' }}> 
                <div className='relative  mt-8' >
                <Map /> 
                </div>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
              <Video />
            </div>

            {/* Cards */}
            <div style={{ display: 'flex',  marginTop: '-22px', marginLeft: '35px'}}>
              <Cards />
            </div>
            <LogBar/>
            {/* Main Content */}
            <div style={{ overflowY: 'auto', padding: '6px' }}>
              {children}
            </div>
          </div>
        </div>
        
      </body>
    </html>
  );
};

export default RootLayout;
