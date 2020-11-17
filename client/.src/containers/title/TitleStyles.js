import styled from 'styled-components';

const TitleStyles = {
  sticker: styled.span`
    background: #fff;
    border: 1px solid #000;
    box-shadow: none;
    color: #000;
    font-family: montserratregular,Arial,Helvetica,sans-serif;
    font-size: 16px;
    font-weight: bold;
    padding: 2px 6px;
  `,
  title: styled.h1`
    color: #000;
    font-family: montserratregular,Arial,Helvetica,sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    margin: 10px 0 5px;
    background: transparent;
    color: #333;
    height: auto;
    min-height: 100%;
    min-width: 976px;
  `,
  skuDetails: styled.span`
    white-space: nowrap;
    padding-top: 3px;
    float: left;
    margin: 0;
    padding: 0;
    padding-top: 0px;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    font-family: montserratregular,Arial,Helvetica,sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #333;
    margin-right: 10px;
  `,
  ratingsDetails: styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    .starWrapper{
      width: 16%
    }
    .images{
      height: 14px;
      width: 14px;
      margin: 0 1px;
    }
  `

}

export default TitleStyles;