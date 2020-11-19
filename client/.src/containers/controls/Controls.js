import React from 'react';
import {expand, plus, minus, reset} from '../../../assets/images';
import ControlsStyles from './ControlsStyles.js';


const Controls = (props) => {
  console.log('controls props:', props)

  let handler = (props.show) ? props.hideModal : props.showModal;

  return (
    <div>
      <ControlsStyles.controls>
        <ControlsStyles.plus>
          <img src={plus} height='25px' width='25px' onClick={props.zoomIn}/>
        </ControlsStyles.plus>
        <ControlsStyles.minus>
          <img src={minus} height='25px' width='25px' onClick={props.zoomOut}/>
        </ControlsStyles.minus>
        <ControlsStyles.reset>
          <img src={reset} height='25px' width='25px' onClick={props.resetZoom}/>
        </ControlsStyles.reset>
        <ControlsStyles.expand>
          <img src={expand} height='22px' width='22px'
          onClick={handler}/>
        </ControlsStyles.expand>
    </ControlsStyles.controls>
    </div>


  );
}

export default Controls;