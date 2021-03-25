import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteCountryTableAction } from "../../store/module/countryTable";
import CountryTable from "./CountryTable";

const CountryTableList = ({ countryList }) => {
  const dispatch = useDispatch();

  const removeCountryTable = (name) => dispatch(deleteCountryTableAction(name));

  return (
    <CountryTableListWrapper>
      {countryList.map(
        ({ name, alpha2Code, callingCodes, capital, region }) => {
          return (
            <CountryTable
              key={name}
              name={name}
              region={region}
              callingCode={callingCodes[0]}
              alpha2Code={alpha2Code}
              capital={capital}
              handleRemoveTalble={removeCountryTable}
            />
          );
        }
      )}
    </CountryTableListWrapper>
  );
};

const CountryTableListWrapper = styled.tbody`
  width: 100%;
  margin: 52px 0px;
  box-shadow: 0 0 0 1px #e1e4e8;
  border-radius: 10px;
`;

export default CountryTableList;
