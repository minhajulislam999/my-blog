import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Blogs from './components/Navbar/Blogs/Blogs.jsx';

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [readingTime, setReadingTime] =useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelectedSkills=(skill)=>{
    // setSelectedSkills(skill)
    setSelectedSkills(prev => {
    if (prev.includes(skill)) return prev;
    return [...prev, skill];
  })
  }

  const handleReadingTime=(time,id)=>{
      setReadingTime(prev => prev + time);

    // setReadingTime([readingTime + time])
    handleRemoveFromBookmark(id)
    

  }

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookMarked=bookMarked.filter((mark)=>mark.id!==id)
    setBookMarked(remainingBookMarked)
  }

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog])

  }
  console.log(bookMarked)
  return (
    <>
      <Navbar />
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

          <Blogs handleBookMark={handleBookMark} 
          handleReadingTime={handleReadingTime}
          handleSelectedSkills={handleSelectedSkills} />

        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time:{readingTime}</h1>
          <h1>
            BookMark Count: {bookMarked.length}
          </h1>

          {/* {
            bookMarked.map(marked => <p>{marked.title}</p>)
          } */}

          <div className="space-y-3">
  {
    bookMarked.map((marked, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-4 rounded-xl 
                   bg-base-200 hover:bg-base-300 
                   transition shadow"
      >
        <p className="text-base font-medium">
          {marked.title}
        </p>

       
        <span className="text-xl cursor-pointer">
          🔖
        </span>
      </div>

      
    ))
  }
</div>
<div className="grid grid-cols-3 gap-4">
  
  {/* Left side blogs */}
  <div className="col-span-2">
    {/* blogs here */}
  </div>

  {/* Right side */}
  <div className="border p-4 rounded">
    <h2 className="font-bold mb-2">Selected Skills</h2>

    {selectedSkills.length === 0 && (
      <p className="text-sm text-gray-500">No skill selected</p>
    )}

    {selectedSkills.map((skill, index) => (
      <p key={index} className="text-sm">
        • {skill}
      </p>
    ))}
  </div>

</div>



        </div>

      </div>
    </>
  );
}

export default App;
