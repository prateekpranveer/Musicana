import React from "react";
import SongsView from "./SongsView";
import styled from "styled-components";

const SearchView = () => {
    const data = null;
  return (
    <>
      <SearchMain>
        <SongsView heading={"Songs"} expand={"See All"} data={data} />
      </SearchMain>
    </>
  );
};

const SearchMain = styled.div`
  display: flex;
  gap: 1rem;
  width: 95%;
  margin: 0px auto;
  height: 100px;
`;

export default SearchView;
