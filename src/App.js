
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default function App() {
  const [query, setQuery] = useState('')
  const apiKey = process.env.REACT_APP_NEWS_API

  const onQuerySearch = (quer) => {
    setQuery(quer)
  }
  return (
    <div className='App'>
      <Navbar onQuery={onQuerySearch} apiKey={apiKey}></Navbar>
      <div className='news-container'>
        <News heading="Top Headlines" apiKey={apiKey} />
      </div>
    </div>
  )
}

