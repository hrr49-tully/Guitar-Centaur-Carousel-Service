import styled from 'styled-components';

const SlideStyles = {
  content: styled.div`
    transform: translateX(-${props => props.translate}px);
    height: 50%;
    width: 50%
    display: flex;
  `,
  slide: styled.div`
    cursor: zoom-in;
    height: 50%;
    width: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.5s all ease-in-out;
    transform-origin: 50% 50%;
 }
  `
}

export default SlideStyles;