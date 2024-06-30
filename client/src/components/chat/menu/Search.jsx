
import React from "react";

//Icon
import { CiSearch } from "react-icons/ci";

import { Box,InputBase, styled } from "@mui/material";


//Styling
const Component = styled(Box)`
  background: #fff;
  height: 44px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 10px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 10px;
  color: #919191;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  height: 15px;
  font-size: 14px;
`;

const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <CiSearch />
        </Icon>
        <InputField
          placeholder="Search or Start a new Chat"
          fontSize="small"
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  );
};

export default Search;
