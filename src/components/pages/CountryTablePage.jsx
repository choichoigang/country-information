import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryTableLoadAction } from "../../store/module/countryTable";
import styled from "styled-components";

import CountryTableList from "../CountryTable/CountryTableList";
import CountryTableHeader from "../CountryTable/CountryTableHeader";
import CountryTableForm from "../CountryTable/CountryTableForm";
import CountrySearch from "../CountryTable/CountrySearch";
import Frame from "../frame/Frame";

const CountryTablePage = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error, filteredList, searchKeyword } = useSelector(
    (state) => state.countryTable
  );

  const filterDisabled = filteredList.length === 0 && searchKeyword === "";

  useEffect(() => {
    dispatch(getCountryTableLoadAction());
  }, []);

  return (
    <Frame>
      {error && <div>Loading</div>}
      {isLoading && <div>Loading</div>}
      {data && (
        <>
          <CountryTableForm />
          <TableWrapper>
            <CountrySearch />
            <CountryTableHeader />
            <CountryTableList
              countryList={filterDisabled ? data : filteredList}
            />
          </TableWrapper>
        </>
      )}
    </Frame>
  );
};

const TableWrapper = styled.table`
  width: 100%;
`;

export default CountryTablePage;
