import React from 'react';
import {expand, minimize, plus, minus, reset} from '../../../assets/images';
import ControlsStyles from './ControlsStyles.js';


const Controls = (props) => {

  let handler = (props.show) ? props.hideModal : props.showModal;

  let toolTip = (props.show) ? 'Minimize' : 'Full Screen';

  let icon = (props.show) ? minimize : expand;

  return (
    <div>
      <ControlsStyles.controls>
        <ControlsStyles.plus>
          <img src={plus} title='Zoom In' height='18px' width='18px' onClick={props.zoomIn}/>
        </ControlsStyles.plus>
        <ControlsStyles.minus>
          <img src={minus} title='Zoom Out' height='18px' width='18px' onClick={props.zoomOut}/>
        </ControlsStyles.minus>
        <ControlsStyles.reset>
          <img src={reset} title='Reset Zoom' height='20px' width='20px' onClick={props.resetZoom}/>
        </ControlsStyles.reset>
        <ControlsStyles.expand>
          <img src={icon} title={toolTip} height='18px' width='18px'
          onClick={handler}/>
        </ControlsStyles.expand>
    </ControlsStyles.controls>
    </div>


  );
}

export default Controls;
