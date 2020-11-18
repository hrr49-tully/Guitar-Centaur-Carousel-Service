import React from 'react';
import SlideStyles from './SlideStyles.js'

const Slide = (props) => {
  let imageURL
  if (props.photo) {
    imageURL = props.photos[props.currentIndex].srcURL
  }
  console.log('slide props  ', props )

  let clickCount = props.clickCount;

  if (clickCount === 3) {
    clickCount = 0;
    props.resetZoom();
  }
  console.log('clickCount:' , clickCount)
  return (
    <SlideStyles.content translate={props.translate}
    transition='0' >
      <SlideStyles.slide >
      <img src={imageURL} object-fit='cover' max-width='100%' max-height='100%'
      height={props.imgHeight}
      width={props.imgWidth} onClick={() => {
        clickCount++;
        props.zoomIn();
        console.log(clickCount)
      }}
      />
      </SlideStyles.slide>
    </SlideStyles.content>
  );
}

export default Slide;