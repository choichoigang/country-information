import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useDebounce from "../../hook/useDebounce";
import { searchCountryTableAction } from "../../store/module/countryTable";
import { baseInput } from "../../style/css";

const CountrySearch = () => {
  const dispatch = useDispatch();

  const dispatchSearchKeyword = (searchKeyword) =>
    dispatch(searchCountryTableAction(searchKeyword));

  const [keyword, setKeyword] = useDebounce(dispatchSearchKeyword, 200);

  const onChangeKeyword = (e) => setKeyword(e.target.value);

  return (
    <tr>
      <td>
        <SearchInput type="text" value={keyword} onChange={onChangeKeyword} />
      </td>
    </tr>
  );
};

const SearchInput = styled.input`
  width: 300px;
  padding: 6px 8px;

  ${baseInput}
`;

export default CountrySearch;
