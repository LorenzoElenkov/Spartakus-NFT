import React from 'react';
import goldenBox from '../../images/goldenBox.png';
import mythicalBox from '../../images/tealBox.png';
import legendaryBox from '../../images/purpleBox.png';
const Boxes = () => {
  return (
    <div className='boxes-container'>
        <div className='single-box'>
            <span className='box-name'>
                GOLDEN BOX
            </span>
            <img src={goldenBox} className="box-image" alt='golden box'/>
            <span className='box-cost'>
                35 $HROM
            </span>
            <button className='box-buy'>
                BUY
            </button>
        </div>
        <div className='single-box'>
            <span className='box-name'>
                MYTHICAL BOX
            </span>
            <img src={mythicalBox} className="box-image" alt='mythical box'/>
            <span className='box-cost'>
                80 $HROM
            </span>
            <button className='box-buy'>
                BUY
            </button>
        </div>
        <div className='single-box'>
            <span className='box-name'>
                LEGENDARY BOX
            </span>
            <img src={legendaryBox} className="box-image" alt='legendary box'/>
            <span className='box-cost'>
                170 $HROM
            </span>
            <button className='box-buy'>
                BUY
            </button>
        </div>
    </div>
  )
}

export default Boxes;