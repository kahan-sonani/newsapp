
import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default function App() {
  const [query, setQuery] = useState('')

  const onQuerySearch = (quer) => {
    setQuery(quer)
  }
  return (
    <div className='App'>
      <Navbar onQuery={onQuerySearch}></Navbar>
      <div className='news-container'>
        <News heading="Top Headlines" query={query} />
      </div>
    </div>
  )
}

