import { css } from "styled-components";

export const baseInput = css`
  padding: 6px 8px;
  margin: 12px 0px;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  min-height: 32px;
  outline: none;

  font-size: ${({ theme: { typo } }) => typo.P_01};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.input};
  background-color: ${({ theme: { color } }) => color.white};
`;
