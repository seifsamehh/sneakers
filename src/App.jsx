import React , {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import { Header, PageOne } from './components';

const App = _ => {
  // loading
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <>
    {
      loading?
      <div className="loader">
        <div className="spinner">
          <div className="inner"></div>
        </div>
      </div>
      :
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<PageOne/>}/>
        </Routes>
      </>
    }
    </>
  )
}

export default App
