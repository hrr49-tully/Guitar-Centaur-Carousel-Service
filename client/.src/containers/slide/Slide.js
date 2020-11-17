import React from 'react';
import SlideStyles from './SlideStyles.js'

const Slide = (props) => {
  let imageURL
  if (props.photo) {
    imageURL = props.photo.srcURL
  }

  return (
    <SlideStyles.content>
      <SlideStyles.slide >
      <img src={imageURL} object-fit='cover' max-width='100%' max-height='100%'
      height='519px'
      width='477.9px'
      />
      </SlideStyles.slide>
    </SlideStyles.content>
  );
}

export default Slide;