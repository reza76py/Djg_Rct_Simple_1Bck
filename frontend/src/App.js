// D:\test3\frontend\src\App.js

import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [content, setContent] = useState({ header: '', paragraph: '' });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/content/')
      .then(response => response.json())
      .then(data => setContent(data));
  }, []);

  return (
    <>
      <div className='min-h-screen'>
        <div className='w-full sm:w-3/4 lg:w-2/4 mx-auto mt-10 mb-3 px-4'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-3'>{content.header}</h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-cyan-900 ml-2'>{content.paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default App;
