import styled from 'styled-components';

const CarouselStyles = {
  container: styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: 284px;
  height: 80px;
  position: absolute;
  display: block;
  bottom: 0;
  z-index: 1;
  left: 100px;
  margin: 10px;
  `,
  leftArrow: styled.img`
    position: absolute;
    top: 29px;
    width: 22px;
    height: 22px;
    z-index: 2;
    display: block;
    cursor: pointer;
  `,
  rightArrow: styled.img`
    position: absolute;
    left: 250px;
    top: 29px;
    width: 22px;
    height: 22px;
    z-index: 3;
    display: block;
    cursor: pointer;
  `,
  images: styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    width: 204px;
    height: 80px;
    position: relative;
    overflow: hidden;
    left: 30px;
    top: 6px;
    display: flex;
  `,
  image: styled.img`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 70px;
    width: 70px;
    border: 1px solid black;
    margin: 5px;
    display: flex;
    :hover {
      border: 1px solid red;
    }
  `
}

export default CarouselStyles;