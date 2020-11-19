import React from 'react';
import TitleStyles from './TitleStyles.js';

import {star, noStar} from '../../../assets/images';

const Title = (props) => {
  console.log('title props:', props)
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.item.avgScore) {
      stars.push(star);
    } else {
      stars.push(noStar);
    }
  }

  return (
    <div>
      <div>
        <TitleStyles.sticker>
          Top Seller
        </TitleStyles.sticker>
      </div>
  <div>
    <TitleStyles.title>
      {props.item.title}
    </TitleStyles.title>
    <TitleStyles.skuDetails>
      Item #: {props.item.itemNum}  POS #: {props.item.POSNum}
    </TitleStyles.skuDetails>
    <TitleStyles.ratingsDetails>
      <div className='starWrapper'>
        {stars.map((star, index) => {
          return <img src={star} className='images' key={index}/>
        })}
      </div>
      <TitleStyles.skuDetails>
      {props.item.reviewCount} <a href=''>Reviews</a>  |  <a href=''>Write A Review</a>  |  <a href=''>Questions & Answers</a>
      </TitleStyles.skuDetails>
    </TitleStyles.ratingsDetails>
  </div>
  </div>
  );
}

export default Title;