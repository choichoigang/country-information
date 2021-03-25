import React from "react";
import styled from "styled-components";
import useDebounce from "../../hook/useDebounce";

const CountrySearch = () => {
  const [keyword, setKeyword] = useDebounce((vale) => {}, 300);
  return <div></div>;
};

export default CountrySearch;
