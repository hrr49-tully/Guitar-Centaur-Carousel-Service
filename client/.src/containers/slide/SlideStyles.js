import styled from 'styled-components';

const SlideStyles = {
  content: styled.div`
    transform: translateX(-${props => props.translate}px);
    display: flex;
    height: 519px;
    // :hover{
    //   .slide{
    //     opacity: 0;
    //   }
    // }
  `,
  slide: styled.div`
    cursor: zoom-in;
    background-size: cover;
    display: flex;
    overflow: hidden;
    background-repeat: no-repeat;
    transition: 0.5s all ease-in-out;
    transform-origin: 50% 50%;
 }
  `
}

export default SlideStyles;