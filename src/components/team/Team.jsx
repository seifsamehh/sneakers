import React from 'react'
import founder from '../../images/founder.webp'
import creator from '../../images/creator.webp'
import strategy from '../../images/strategy.webp'
import './style/team.css'

const Team = _ => {
  return (
    <section className='team py-12'>
        <div className="boxs flex justify-around items-center gap-8">
            <div className="box-1 text-center flex items-center flex-col gap-6 w-full">
                <img src={founder} alt="founder" />
                <h1>ALI DAWOOD</h1>
                <h3>CO-FOUNDER & CREATOR</h3>
                <p>Creator of Sneakerheads: Artist, Architect & B-boy. He spent his nights developing this personal project. After months of work, sneakerheads are now a staple.</p>
            </div>
            <div className="box-2 text-center flex items-center flex-col gap-6 w-full">
                <img src={creator} alt="creator" className='two' />
                <h1>FARES BENOUHIBA</h1>
                <h3>CO-FOUNDER - OPERATOR</h3>
                <p>Experienced operator with 20+ years of experience in music & brand building, Founder of Emf Media, and 1st snapchat ambassador in Europe.</p>
            </div>
            <div className="box-3 text-center flex items-center flex-col gap-6 w-full">
                <img src={strategy} alt="strategy"className='three' />
                <h1>SAM ZUCKERBRAUN</h1>
                <h3>HEAD OF STRATEGY / COMMUNITY</h3>
                <p>Sam has a background in sneaker collecting, entrepreneurship and community building. Sam has built and managed Facebook groups like Proxy Talk, Nike Talk, Sup Talk and New Balance Community for over 6 years. He then started the popular sneaker store and marketplace app Proxyeed in London before going full time web3.</p>
            </div>
        </div>
    </section>
  )
}

export default Team