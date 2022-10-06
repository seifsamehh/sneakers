import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import page1 from '../../images/page-1.webp'
import About from '../about/About';
import Collect from '../collect/Collect';
import Draws from '../draws/Draws';
import Faq from '../faq/Faq';
import HomeOne from '../homeOne/HomeOne';
import ScrollX from '../scrollX/ScrollX';
import Team from '../team/Team';
import './style/page-one.css'

const PageOne = _ => {
  return (
    <>
        <main>
      {/* start section 1 */}
      <section className="home flex justify-center items-center flex-col pt-12 overflow-clip">
        <h1 className='text-9xl font-bold tracking-tighter relative z-10'>SNEAKER HEADS</h1>
        <Parallax translateY={[-30, 50]}>
          <img src={page1} alt="first page" />
        </Parallax>
        <p className='relative z-10 text-center text-7xl uppercase font-bold'>
          5,000 hand-drawn sneakerheads<br/>
          made by <span>ali dawood</span> . Bringing<br/>
          streetwear culture to web3.
        </p>
      </section>
      {/* end section 1 */}
      {/* start section 2 */}
      <HomeOne/>
      {/* end section 2 */}
      {/* start section 3 */}
      <Collect/>
      {/* end section 3 */}
      {/* start section 4 */}
      <ScrollX/>
      {/* end section 4 */}
      {/* start section 5 */}
      <About/>
      {/* end section 5 */}
      {/* start section 6 */}
      <Draws/>
      {/* end section 6 */}
      {/* start section 7 */}
      <Team/>
      {/* end section 7 */}
      {/* start section 8 */}
      <Faq/>
      {/* end section 8 */}
    </main>
    <footer className='pb-6'>
      <p className='text-center'>ALL RIGHT RESERVED &copy; 2022</p>
    </footer>
    </>
  )
}

export default PageOne