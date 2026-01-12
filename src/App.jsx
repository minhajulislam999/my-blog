import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Blogs from './components/Navbar/Blogs/Blogs.jsx';

function App() {
  const [bookMared, setBookMarked] = useState([]);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMared, blog])

  }
  console.log(bookMared)
  return (
    <>
      <Navbar />
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

          <Blogs handleBookMark={handleBookMark} />

        </div>
        <div className="right-container w-[30%]">

          {
            bookMared.map(marked => <p>{marked.title}</p>)
          }
        </div>

      </div>
    </>
  );
}

export default App;
