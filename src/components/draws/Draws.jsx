import React from 'react'
import face1 from '../../images/slide-1.webp'
import face2 from '../../images/slide-2.webp'
import face3 from '../../images/slide-3.webp'
import face4 from '../../images/slide-4.webp'
import { Parallax } from 'react-scroll-parallax';
import './style/draws.css'

const Draws = _ => {
  return (
    <section className='draws overflow-hidden h-screen flex items-center'>
        <Parallax translateX={[40, -70]}>
            <div className="draws-gallery flex items-center gap-4">
                <img src={face1} alt="draw 1" />
                <img src={face2} alt="draw 2" />
                <img src={face3} alt="draw 3" />
                <img src={face4} alt="draw 4" />
                <img src={face1} alt="draw 1" />
                <img src={face2} alt="draw 2" />
            </div>
        </Parallax>
    </section>
  )
}

export default Draws