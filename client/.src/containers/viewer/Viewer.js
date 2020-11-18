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
    imgHeight: 519,
    imgWidth: 477.9,
    currentIndex: 0,
    translate: 0,
    transition: 0.45,
    clickCount: 0
  });

  const { translate, transition, currentIndex, imgHeight, imgWidth, clickCount } = state;

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
      currentIndex: currentIndex + 1
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
      currentIndex: currentIndex - 1
    })
  }

  const updateCurrent = (index) => {
    console.log('update current called with: ', index)
    setState({
      ...state,
      currentIndex: index
    })
  }

  const zoomIn = () => {
    console.log('zoom in clicked!')
    setState({
      ...state,
      clickCount: clickCount + 1,
      imgHeight: imgHeight + 100,
      imgWidth: imgWidth + 100
    })
  }

  const zoomOut = () => {
    console.log('zoom out clicked!')
    if (imgHeight !== 519) {
      setState({
        ...state,
        clickCount: clickCount - 1,
        imgHeight: imgHeight - 100,
        imgWidth: imgWidth - 100
      })
    }

  }

  const resetZoom = () => {
    console.log('zoom reset clicked!')
    setState({
      ...state,
      clickCount: 0,
      imgHeight: 519,
      imgWidth: 477.9
    })
  }


  console.log('Viewer Props:', props);
  console.log('Viewer state:',state);
  return (
  <ViewerStyles.viewer>
    <ViewerStyles.content
      translate={translate}
      transition={transition}
      width={getWidth()}
      currentIndex={currentIndex}
      photos={props.photos}
      updateCurrent={updateCurrent}>
        {props.photos.map((photo, index) => {
          return <Slide photo={photo} key={index}
          photos={props.photos}
          currentIndex={currentIndex}
          imgHeight={imgHeight}
          imgWidth={imgWidth}
          translate={translate}
          transition={transition}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          resetZoom={resetZoom}
          width={getWidth()}
          updateCurrent={updateCurrent}
          clickCount={clickCount}/>
        })}
    </ViewerStyles.content>
    <Controls zoomIn={zoomIn}
              zoomOut={zoomOut}
              resetZoom={resetZoom}/>
    <Carousel photos={props.photos}
              currentIndex={currentIndex}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              updateCurrent={updateCurrent}/>
  </ViewerStyles.viewer>
  )
}



export default Viewer;