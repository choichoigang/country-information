import React from "react";
import styled from "styled-components";

const Frame = ({ children }) => {
  return <FrameWrapper>{children}</FrameWrapper>;
};

const FrameWrapper = styled.section`
  margin: auto;
  max-width: 1024px;
  min-width: 768px;

  margin: 52px 0px;
`;

export default Frame;
