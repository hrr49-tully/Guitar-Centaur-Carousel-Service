import styled from 'styled-components';

const ControlsStyles = {
  controls: styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  margin: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  `,
  plus: styled.div`
    top: 10px;
    left: 5px;
    border-radius: 3px;
    margin: 3px;
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: #999;
    background-size: auto;
    cursor: pointer;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #bfbebe;
    }

  `,
  minus: styled.div`
    top: 10px;
    left: 38px;
    border-radius: 3px;
    margin: 3px;
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: #bfbebe;
    background-size: auto;
    cursor: pointer;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  reset: styled.div`
    top: 42px;
    left: 5px;
    border-radius: 3px;
    margin: 3px;
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: #bfbebe;
    background-size: auto;
    cursor: pointer;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  expand: styled.div`
    top: 42px;
    left: 38px;
    border-radius: 3px;
    margin: 3px;
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: #999;
    background-size: auto;
    cursor: pointer;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #bfbebe;
    }
  `
}

export default ControlsStyles;