import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Blogs from './components/Navbar/Blogs/Blogs.jsx';

function App() {
  const [bookMared, setBookMarked] = useState([]);
  const [readingTime, setReadingTime] =useState([]);

  const handleReadingTime=(time)=>{
    setReadingTime([readingTime + time])
    

  }

  const handleBookMark = (blog) => {
    setBookMarked([...bookMared, blog])

  }
  console.log(bookMared)
  return (
    <>
      <Navbar />
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

          <Blogs handleBookMark={handleBookMark} 
          handleReadingTime={handleReadingTime} />

        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time:{readingTime}</h1>
          <h1>
            BookMark Count: {bookMared.length}
          </h1>

          {
            bookMared.map(marked => <p>{marked.title}</p>)
          }
        </div>

      </div>
    </>
  );
}

export default App;
