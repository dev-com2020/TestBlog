import React, { useState } from 'react';
import SearchQuery from './SearchQuery';
import {
    StyledHeading,
    StyledFormWrapper,
    StyledInput,
    StyledButton,
} from './SearchStyles.js';
import styled from 'styled-components'
const Line = styled.div`
height:4px;
width:100%;
background-color:lightgray;
border-radius: 4px;
overflow:hidden;
position:relative;
& span {
    position:absolute;
    height:4px;
    width: 5%;
    left:0;
}
`;

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const handleSearchChange = e => {
        setSearchValue(e.target.value);
        setIsSearching(false);
    }
    const handleButtonClick = e => {
        e.preventDefault();
        if (searchValue === "") return;
        else if (searchValue.length < 3) return;
        setIsSearching(true);
    }
    return (
        <>
            <StyledHeading>
                Wyszukaj:
        </StyledHeading>
            <Line />
            <StyledFormWrapper>
                <StyledInput
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Wpisz słowo kluczowe"
                />
                <StyledButton
                    type="submit"
                    onClick={handleButtonClick}>
                    Wyszukaj!
                    </StyledButton>
            </StyledFormWrapper>
            <SearchQuery
                searchValue={searchValue}
                isSearching={isSearching} />
        </>
    );
}

export default Search;