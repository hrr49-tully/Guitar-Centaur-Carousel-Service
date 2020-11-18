import React, { useState }  from 'react';
import ViewerStyles from './ViewerStyles.js';
import Slide from '../slide/Slide.js'
import Controls from '../controls/Controls.js'
import Carousel from '../carousel/Carousel.js'

/**
 * @function Viewer
 */
const Viewer = (props) => {

  const getWidth = () => 477.9 / 2;

  const [state, setState] = useState({
    currentIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, currentIndex } = state;

  //functions to handle clicks go here
  const nextSlide = () => {
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

  const prevSlide = () => {
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

  const updateCurrent = (index) => {
    console.log('update current called with: ', index)
    setState({
      ...state,
      currentIndex: index
    })
  }


  console.log('Viewer Props:', props);
  console.log(state);
  console.log(currentIndex);
  return (
  <ViewerStyles.viewer>
    <ViewerStyles.content
      translate={translate}
      transition={transition}
      width={getWidth()}>
        {props.photos.map((photo, index) => {
          return <Slide photo={photo} key={index}
          currentIndex={currentIndex}
          translate={translate}
          transition={transition}
          width={getWidth()}/>
        })}
    </ViewerStyles.content>
    <Controls/>
    <Carousel photos={props.photos}
              currentIndex={currentIndex}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              updateCurrent={updateCurrent}/>
  </ViewerStyles.viewer>
  )
}



export default Viewer;