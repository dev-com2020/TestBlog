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
    const handleButtonClick = e => {
        e.preventDefault();
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
                    placeholder="Wpisz wyszukiwaną frazę"
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