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
  border: 5px solid red;
  margin-left: 10px;
  `,
  content: styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`
}

export default ViewerStyles;