import React from 'react'
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default Billing
