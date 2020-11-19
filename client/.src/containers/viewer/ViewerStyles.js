import styled from 'styled-components';

const ViewerStyles = {
  viewer: styled.div`
    float: left;
    position: relative;
    height: 619px;
    width: 477.9px;
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
    margin-left: 10px;
  `,
  content: styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
  `,
  modalShown: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    margin: 0 auto;
    overflow: hidden;
  `,
  modalHidden: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: none;
    overflow: hidden;
  `,
  modalContent: styled.div`
    position: absolute;
    height: 100%
    width: 100%
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
    margin-left: 10px;
    margin: 0 auto;
    background-color: red;
  `,
  modalViewer: styled.div`
    display: flex;
    position: relative;
    height: 519px;
    width: 477.9px;
    overflow: hidden;
    margin: 0 auto;
  `,
  modalControls: styled.div`
    display: flex;
    position: absolute;
    left: 0px;
    bottom: 0px;
    float: left;
  `,
  modalCarousel: styled.div`
    display: flex;
    margin: 0 auto;
    position: absolute;
    bottom: 0px;
    width: 500px;
    height: 80px;
  `

}

export default ViewerStyles;