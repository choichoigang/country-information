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
  const { isLoading, data, error } = useSelector((state) => state.countryTable);
  const dispatch = useDispatch();

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
            <CountryTableList countryList={data} />
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
