import styled from 'styled-components';

const SlideStyles = {
  content: styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
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
  `
}

export default SlideStyles;