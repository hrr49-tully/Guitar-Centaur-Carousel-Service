import React, { useState }  from 'react';
import ViewerStyles from './ViewerStyles.js';
import Slide from '../slide/Slide.js'

// class Viewer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       photos: this.props.photos,
//       translate: 0,
//       transition: 0.45
//     }
//   }

//   getWidth () {
//     return window.innerWidth;
//   }

//   render () {
//     return (
//       <ViewerStyles.viewer>
//         {this.props.photos.map((photo, index) => {
//           return <Slide photo={photo} key={index} translate={this.state.translate}
//           transition={this.state.transition}
//           width={this.getWidth.bind(this)}/>
//         })}
//       </ViewerStyles.viewer>
//     );
//   }
// }

/**
 * @function Viewer
 */
const Viewer = (props) => {

  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  });

  const { translate, transition } = state;


  console.log('Viewer Props:', props);
  return (
  <ViewerStyles.viewer>
    <ViewerStyles.content
      translate={translate}
      transition={transition}
      width={getWidth()}>
        {props.photos.map((photo, index) => {
          return <Slide photo={photo} key={index}
          translate={translate}
          transition={transition}
          width={getWidth() * props.photos.length}/>
        })}
    </ViewerStyles.content>
  </ViewerStyles.viewer>
  )
}



export default Viewer;