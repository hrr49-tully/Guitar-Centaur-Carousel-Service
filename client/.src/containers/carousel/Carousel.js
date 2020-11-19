import React, { useState, useEffect, useRef }from 'react';
import {back, next} from '../../../assets/images';
import CarouselStyles from './CarouselStyles.js';

const Carousel = (props) => {

  const [state, setState] = useState({
    currentIndex: props.currentIndex,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, currentIndex } = state;

  const nextImage = () => {
    if (currentIndex === props.photos.length - 1) {
      return setState({
        ...state,
        translate: -70,
        currentIndex: 0
      })
    }

    setState({
      ...state,
      currentIndex: currentIndex + 1,
      translate: (currentIndex + 1) * 70
    })
  }

  const prevImage = () => {
    if (currentIndex === 0) {
      return setState({
        ...state,
        translate: (props.photos.length - 1) * 70,
        currentIndex: props.photos.length - 1
      })
    }

    setState({
      ...state,
      currentIndex: currentIndex - 1,
      translate: (currentIndex - 1) * 70
    })
  }

  return (
    <div>
      <CarouselStyles.container>
        <CarouselStyles.images>
        {props.photos.map((photo, index) => {
          return <CarouselStyles.image
            className={(index === currentIndex) ? 'current' : ''}
            src={photo.srcURL}
            key={index}
            translate={translate}
            transition={transition}
            onClick={(key) => {
              console.log('image clicked')
              props.updateCurrent(index);
            }}>
            </CarouselStyles.image>
        })}
        </CarouselStyles.images>
        <CarouselStyles.leftArrow src={back} title='Scroll Left' onClick={() => {
          props.prevSlide()
          prevImage()
        }
          } >
        </CarouselStyles.leftArrow>
        <CarouselStyles.rightArrow src={next} title='Scroll Right' onClick={ () => {
          props.nextSlide()
          nextImage()
        } } ></CarouselStyles.rightArrow>
      </CarouselStyles.container>
    </div>
  );
}

export default Carousel;