import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteCountryTableAction } from "../../store/module/countryTable";
import CountryTable from "./CountryTable";

const CountryTableList = ({ countryList }) => {
  const dispatch = useDispatch();

  const removeCountryTable = (tableId) =>
    dispatch(deleteCountryTableAction(tableId));

  return (
    <CountryTableListWrapper>
      {countryList.map(
        ({ name, alpha2Code, callingCodes, capital, region, tableId }) => {
          return (
            <CountryTable
              key={tableId}
              tableId={tableId}
              name={name}
              region={region}
              callingCodes={callingCodes.join(",")}
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
