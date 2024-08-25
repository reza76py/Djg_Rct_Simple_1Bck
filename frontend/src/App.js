import { useState } from 'react';
import "./App.css";

function App() {
  const [content, setContent] = useState({ header: '', paragraph: '' });
  const [savedContent, setSavedContent] = useState({ header: '', paragraph: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContent(prevContent => ({
      ...prevContent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/content/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
    .then(response => response.json())
    .then(data => {
      setSavedContent(data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <div className='min-h-screen'>
        <div className='w-full sm:w-3/4 lg:w-2/4 mx-auto mt-10 mb-3 px-4'>
          <h2 className='text-2xl mb-3'>Enter Header and Paragraph</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Input for Header */}
            <input
              type="text"
              name="header"
              value={content.header}
              onChange={handleInputChange}
              className='w-full mb-4 p-2 border border-gray-300 rounded'
              placeholder="Enter Header"
            />

            {/* Input for Paragraph */}
            <textarea
              name="paragraph"
              value={content.paragraph}
              onChange={handleInputChange}
              className='w-full mb-4 p-2 border border-gray-300 rounded'
              placeholder="Enter Paragraph"
              rows="4"
            ></textarea>

            <button type="submit" className='w-full p-2 bg-blue-500 text-white rounded'>Save Content</button>
          </form>

          {/* Display the saved content */}
          <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-3'>{savedContent.header}</h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-cyan-900 ml-2'>{savedContent.paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default App;
