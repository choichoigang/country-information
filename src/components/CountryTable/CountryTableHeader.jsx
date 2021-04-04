import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SortButton from "../moduleComponent/SortButton";
import { reOrderCountryTableAction } from "../../store/module/countryTable";

const CountryTableHeader = () => {
  const dispatch = useDispatch();
  const {
    order: { name, alpha2Code, callingCodes, capital, region },
  } = useSelector((state) => state.countryTable);

  const sortCountryCategory = (key) => dispatch(reOrderCountryTableAction(key));

  return (
    <CountryTableHeaderWrapper>
      <td>
        <SortButton
          name="name"
          handleClick={sortCountryCategory}
          isActive={name}
        />
      </td>
      <td>
        <SortButton
          name="alpha2Code"
          handleClick={sortCountryCategory}
          isActive={alpha2Code}
        />
      </td>
      <td>
        <SortButton
          name="callingCodes"
          handleClick={sortCountryCategory}
          isActive={callingCodes}
        />
      </td>
      <td>
        <SortButton
          name="capital"
          handleClick={sortCountryCategory}
          isActive={capital}
        />
      </td>
      <td>
        <SortButton
          name="region"
          handleClick={sortCountryCategory}
          isActive={region}
        />
      </td>
    </CountryTableHeaderWrapper>
  );
};

const CountryTableHeaderWrapper = styled.tr`
  display: flex;
  width: 100%;
  height: 50px;
`;

export default CountryTableHeader;
