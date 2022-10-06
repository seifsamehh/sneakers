import React from 'react'
import face1 from '../../images/face-1.webp'
import face2 from '../../images/face-2.webp'
import face3 from '../../images/face-3.webp'
import face4 from '../../images/face-4.webp'
import face5 from '../../images/face-5.webp'
import { Parallax } from 'react-scroll-parallax';
import './style/scrollx.css'

const ScrollX = _ => {
  return (
    <section className='scrollx overflow-x-hidden'>
      <Parallax translateX={[30, -80]}>
        <div className="gallery flex">
          <img src={face1} alt="face 1" />
          <img src={face2} alt="face 2" />
          <img src={face3} alt="face 3" />
          <img src={face4} alt="face 4" />
          <img src={face5} alt="face 5" />
        </div>
      </Parallax>
        <h1 className='text-center absolute left-1/3 z-10 text-7xl font-bold'>40 SKILL MODEL</h1>
        <Parallax translateX={[-80, 80]}>
          <div className="gallery-2 flex">
            <img src={face5} alt="face 5" />
            <img src={face4} alt="face 4" />
            <img src={face3} alt="face 3" />
            <img src={face2} alt="face 2" />
            <img src={face1} alt="face 1" />
          </div>
        </Parallax>
    </section>
  )
}

export default ScrollX