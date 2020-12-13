import React, { useState } from 'react';
import Line from '../Line/Line';
import SearchQuery from './SearchQuery';
import {
    StyledHeading,
    StyledFormWrapper,
    StyledInput,
    StyledButton
} from './SearchStyles.js';


const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const handleSearchChange = e => {
        setSearchValue(e.target.value);
        setIsSearching(false);
    }
    const handleButtonClick = () => {
        setIsSearching(true);
    }
    return (
        <>
            <StyledHeading>
                Wyszukaj:
        </StyledHeading>
            <Line />
            <StyledFormWrapper>
                <StyledInput value={searchValue} onChange={handleSearchChange} />
                <StyledButton onClick={handleButtonClick}>Wyszukaj!</StyledButton>
            </StyledFormWrapper>
            <SearchQuery searchValue={searchValue} isSearching={isSearching} />
        </>
    );
}

export default Search;