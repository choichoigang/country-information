import React from "react";
import styled from "styled-components";
import Button from "../moduleComponent/Button";

const CountryTable = ({ name, alpha2Code, callingCode, capital, region }) => {
  return (
    <CountryTableWrapper>
      <td>{name}</td>
      <td>{alpha2Code}</td>
      <td>{callingCode}</td>
      <td>{capital}</td>
      <td>{region}</td>

      <td>
        <Button width={"100%"} onClick={() => {}}>
          Delete
        </Button>
      </td>
    </CountryTableWrapper>
  );
};

const CountryTableWrapper = styled.tr`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #e1e4e8;

  td {
    display: flex;
    align-items: flex-start;

    width: 16%;
    padding: 10px;
    font-size: 1.4rem;
  }
`;

export default CountryTable;
