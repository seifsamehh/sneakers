import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import faq from '../../images/faq.webp'
import './style/faq.css'

const Faq = _ => {
  return (
    <section className='faq py-12 flex items-center'>
        <div className="left-part">
            <img src={faq} alt="faq" />
        </div>
        <div className="right-part w-full">
            <h1 className='text-8xl font-thin mb-8'>FAQ</h1>
            <div className="content flex flex-col gap-6">
                <details>
                    <summary>What is the mint price?</summary>
                    <p>Mint price will be 0.25 ETH.</p>
                </details>
                <details>
                    <summary>What if some winners on the guaranteed mint allowlist do not mint?</summary>
                    <p>We will randomly select more winners from the Premint raffle to win a spot on the “waitlist”. People on the waitlist will be able to mint any supply that might be remaining after the whitelist & raffle  has finished.</p>
                </details>
                <details>
                    <summary>What are the rewards for Stocking?</summary>
                    <p>The longer you Stock your SneakerHead back in the box, the more rewards you’ll accumulate. We want to reward community members who are stocking. We’ll be announcing specific rewards and reward tiers in the near future. This will vary from limited edition airdrops and physical rewards.</p>
                </details>
            </div>
        </div>
    </section>
  )
}

export default Faq