import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const Memory = styled.p`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const timelineimage = styled.img`
  position: absolute;
  z-index: 100;

  text-align: center;
  color: white;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #fed136;

  left: 50%;
  width: 100px;
  height: 100px;
  margin-left: -50px;
`;

export const List = styled.li`
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;

  float: right;
  padding: 0 20px 0 100px;
  text-align: left;

  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
`;
