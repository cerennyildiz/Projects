import { useState } from 'react'

import BlogPost from './BlogPost';


import './App.css'

function App() {
 

  return (
    <>
    <div>
     <h1 className='blog-h'>My Blog</h1>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
   
    </>
    
  )
}


export default App
