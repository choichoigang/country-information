import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useDebounce from "../../hook/useDebounce";
import { searchCountryTableAction } from "../../store/module/countryTable";

const CountrySearch = () => {
  const dispatch = useDispatch();

  const dispatchSearchKeyword = (searchKeyword) =>
    dispatch(searchCountryTableAction(searchKeyword));

  const [keyword, setKeyword] = useDebounce(dispatchSearchKeyword, 200);

  const onChangeKeyword = (e) => setKeyword(e.target.value);

  return (
    <div>
      <SearchInput type="text" value={keyword} onChange={onChangeKeyword} />
    </div>
  );
};

const SearchInput = styled.input`
  width: 300px;
  height: 48px;
  margin: 12px 0px;

  background-color: #000000;
  color: white;
`;

export default CountrySearch;
