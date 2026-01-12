import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Blogs from './components/Navbar/Blogs/Blogs.jsx';

function App() {

  return (
    <>
      <Navbar />
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

          <Blogs  />

        </div>
        <div className="right-container w-[30%]">right</div>
      </div>
    </>
  );
}

export default App;
