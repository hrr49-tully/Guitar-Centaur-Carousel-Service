import React, { useState } from 'react';
import SlideStyles from './SlideStyles.js'

const Slide = (props) => {
  const [state, setState] = useState({
    backgroundPosition: '0% 0%'
  });

  const { backgroundPosition } = state;

  const handleZoom = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect()
    const x = (event.pageX - left) / width * 100
    const y = (event.pageY - top) / height * 100
    setState({ backgroundPosition: `${x}% ${y}%` })
  }
  // let urlForBG = `url(${props.photo.srcURL})`

  let imageURL;
  if (props.photo) {
    imageURL = props.photos[props.currentIndex].srcURL;
  }
  let clickCount = props.clickCount;

  if (clickCount === 3) {
    clickCount = 0;
    props.resetZoom();
  }

  return (
    <SlideStyles.content translate={props.translate}
    transition='0' >
      <SlideStyles.slide onClick={handleZoom}  style={state}>
        <img className='slide' src={imageURL} object-fit='cover' max-width='100%' max-height='100%'
        height={props.imgHeight}
        display='flex'
        align-items='center'
        justify-content='center'
        overflow='hidden'
        width={props.imgWidth} onClick={() => {
          clickCount++;
          props.zoomIn();
        }}
        />
      </SlideStyles.slide>
    </SlideStyles.content>
  );
}

export default Slide;
