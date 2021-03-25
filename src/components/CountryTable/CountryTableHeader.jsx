import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SortButton from "./SortButton";
import { reOrderCountryTableAction } from "../../store/module/countryTable";

const CountryTableHeader = () => {
  const dispatch = useDispatch();
  const {
    order: { name, alpha2Code, callingCodes, capital, region },
  } = useSelector((state) => state.countryTable);

  const sortCountryCategory = (key) => dispatch(reOrderCountryTableAction(key));

  return (
    <CountryTableHeaderWrapper>
      <SortButton
        name="name"
        handleClick={sortCountryCategory}
        isActive={name}
      />
      <SortButton
        name="alpha2Code"
        handleClick={sortCountryCategory}
        isActive={alpha2Code}
      />
      <SortButton
        name="callingCodes"
        handleClick={sortCountryCategory}
        isActive={callingCodes}
      />
      <SortButton
        name="capital"
        handleClick={sortCountryCategory}
        isActive={capital}
      />
      <SortButton
        name="region"
        handleClick={sortCountryCategory}
        isActive={region}
      />
    </CountryTableHeaderWrapper>
  );
};

const CountryTableHeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

export default CountryTableHeader;
