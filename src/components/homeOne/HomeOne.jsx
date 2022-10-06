import React from 'react'
import nfts from '../../images/faces.webp'
import { Parallax } from 'react-scroll-parallax';
import './style/homeOne.css'

const HomeOne = _ => {
  return (
    <section className='home-one relative h-screen flex justify-center items-center bg-black overflow-clip'>
      <div className="left-part pl-6">
        <h1 className='text-7xl font-thin tracking-tighter'>STOCK<br/>YOUR NFTS</h1>
        <p>Sneakerheads is 100% allowlist mint, if you made it to the allowlist you can get ready to mint at 2PM EST - 11 AM PT on 18th June.</p>
        <button className="cssbuttons-io-button"> Get started
          <div className="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
        </button>
      </div>
      <div className="right-part">
        <Parallax translateY={["-500px","100px"]}>
          <img src={nfts} alt="faces" />
        </Parallax>
      </div>
    </section>
  )
}

export default HomeOne