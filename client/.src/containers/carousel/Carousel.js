import React, { useState, useEffect, useRef }from 'react';
import {back, next} from '../../../assets/images';
import CarouselStyles from './CarouselStyles.js';

const Carousel = (props) => {
  console.log('carousel props:', props)

  const getWidth = () => 70;

  const [state, setState] = useState({
    currentIndex: props.currentIndex,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, currentIndex } = state;

  const handleClick = () => {

  }

  const nextImage = () => {
    if (currentIndex === props.photos.length - 1) {
      return setState({
        ...state,
        translate: 0,
        currentIndex: 0
      })
    }

    setState({
      ...state,
      currentIndex: currentIndex + 1,
      translate: (currentIndex + 1) * getWidth()
    })
  }

  const prevImage = () => {
    if (currentIndex === 0) {
      return setState({
        ...state,
        translate: (props.photos.length - 1) * getWidth(),
        currentIndex: props.photos.length - 1
      })
    }

    setState({
      ...state,
      currentIndex: currentIndex - 1,
      translate: (currentIndex - 1) * getWidth()
    })
  }


  console.log('carousel State: ',state);
  console.log('carousel props: ',props);
  return (
    <div>
      <CarouselStyles.container>
        <CarouselStyles.images>
        {props.photos.map((photo, index) => {
          return <CarouselStyles.image
            src={photo.srcURL}
            key={index}
            translate={translate}
            transition={transition}
            width={getWidth() * props.photos.length}
            onClick={(key) => {
              console.log('image clicked')
              props.updateCurrent(index);
            }}>
            </CarouselStyles.image>
        })}
        </CarouselStyles.images>
        <CarouselStyles.leftArrow src={back} onClick={() => {
          props.prevSlide()
          prevImage()
        }
          } >
        </CarouselStyles.leftArrow>
        <CarouselStyles.rightArrow src={next} onClick={ () => {
          props.nextSlide()
          nextImage()
        } } ></CarouselStyles.rightArrow>
      </CarouselStyles.container>
    </div>
  );
}

export default Carousel;