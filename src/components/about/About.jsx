import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import './style/about.css'

const About = _ => {
  return (
    <section className='about py-6 overflow-x-hidden'>
      <h1 className='heading text-9xl tracking-tighter ml-12'>ABOUT</h1>
      <div className="content flex justify-around items-start pt-20">
        <Parallax translateX={[-20, 10]}>
          <div className="left">
            <h1 className='text-5xl font-thin mb-8'>FOLLOW US ON:</h1>
            <p>TWITTER</p>
            <p>DISCORD</p>
            <p>INSTGRAM</p>
          </div>
        </Parallax>
        <div className="right">
          <p>Feel the leather. The lace. The rubber. Feel the<br/> street. The hot drops.. What was once physical<br/> is now digital. The future of streetwear is here<br/> - and there's no going back.</p>
          <p className='my-6'>Sneakerheads isn't just a<br/> brand. It isn't just a collection. Born from the mind of Ali Dawood<br/> - we are creating Web 3.0's largest sneaker<br/> community. One that gives power to the creators<br/> and the community. Starting with 5000 avatars<br/> and 40 distinct models, Sneakerheads is a canvas<br/> for collaborations, physical and digital,<br/> bringing real utility to sneaker culture.</p>
          <p className='my-6'>And that starts with community. Community is at<br/> the heart of sneaker culture. It's an identity.<br/> A movement. A way to express yourself and your<br/> creativity. From Ali's art to how we interact<br/> with our members: community is key.</p>
          <p>We aren't just another avatar project. When you<br/> join Sneakerheads, you're joining the urban<br/> community of the future.</p>
        </div>
      </div>
    </section>
  )
}

export default About