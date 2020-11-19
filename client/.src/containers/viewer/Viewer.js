import React, { useState, useEffect, useCallback }  from 'react';
import ViewerStyles from './ViewerStyles.js';
import Slide from '../slide/Slide.js'
import Controls from '../controls/Controls.js'
import Carousel from '../carousel/Carousel.js'

const Viewer = (props) => {

  const getWidth = () => 477.9 / 2;

  const [state, setState] = useState({
    imgHeight: 519,
    imgWidth: 477.9,
    currentIndex: 0,
    translate: 0,
    transition: 0.45,
    clickCount: 0,
    show: false
  });

  const { translate, transition, currentIndex, imgHeight, imgWidth, clickCount, show } = state;

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

  const showModal = () => {
    console.log('show modal clicked!')
    setState({
      ...state,
      show: true
    })
  }

  const hideModal = () => {
    console.log('closed the modal!')
    setState({
      ...state,
      show: false
    })
  }



  console.log('Viewer Props:', props);
  console.log('Viewer state:',state);
  return (
    <div>
  <ViewerStyles.viewer>
    <ViewerStyles.content
      currentIndex={currentIndex}
      photos={props.photos}
      updateCurrent={updateCurrent}>
        {props.photos.map((photo, index) => {
          return <Slide photo={photo} key={index}
          photos={props.photos}
          currentIndex={currentIndex}
          imgHeight={imgHeight}
          imgWidth={imgWidth}
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
              resetZoom={resetZoom}
              showModal={showModal}
              hideModal={hideModal}/>
    <Carousel photos={props.photos}
              currentIndex={currentIndex}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
              updateCurrent={updateCurrent}
              show={show}/>
  </ViewerStyles.viewer>
  <Modal  show={show}
          showModal={showModal}
          hideModal={hideModal}
          props={state}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          updateCurrent={updateCurrent}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          resetZoom={resetZoom}
          photos={props.photos}
          width={getWidth()}
              ></Modal>
  </div>
  )
}

const Modal = (props) => {

  const escape = useCallback((event) => {
    if(event.keyCode === 27) {
      props.hideModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escape, false);

    return () => {
      document.removeEventListener("keydown", escape, false);
    };
  }, []);

  if (props.show === true) {
    return (
      <div>
      <ViewerStyles.modalShown>
      <ViewerStyles.modalControls>
    <Controls zoomIn={props.zoomIn}
              zoomOut={props.zoomOut}
              resetZoom={props.resetZoom}
              hideModal={props.hideModal}
              showModal={props.showModal}
              show={props.show}/>
    </ViewerStyles.modalControls>
    <ViewerStyles.modalCarousel>
    <Carousel photos={props.photos}
              currentIndex={props.props.currentIndex}
              prevSlide={props.prevSlide}
              nextSlide={props.nextSlide}
              updateCurrent={props.updateCurrent}
              show={props.show}/>
    </ViewerStyles.modalCarousel>
      <ViewerStyles.modalViewer>
      <ViewerStyles.modalContent
      currentIndex={props.props.currentIndex}
      photos={props.photos}
      updateCurrent={props.updateCurrent}>
        {props.photos.map((photo, index) => {
          return <Slide photo={photo} key={index}
          photos={props.photos}
          currentIndex={props.props.currentIndex}
          imgHeight={props.props.imgHeight}
          imgWidth={props.props.imgWidth}
          zoomIn={props.zoomIn}
          zoomOut={props.zoomOut}
          resetZoom={props.resetZoom}
          updateCurrent={props.updateCurrent}
          clickCount={props.props.clickCount}/>
        })}
    </ViewerStyles.modalContent>
    </ViewerStyles.modalViewer>
        </ViewerStyles.modalShown>
      </div>
    );
  } else {
    return (
      <div>
      <ViewerStyles.modalHidden >
        </ViewerStyles.modalHidden>
      </div>
    );
  }

};



export default Viewer;