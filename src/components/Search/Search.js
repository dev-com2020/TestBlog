import React, { useState } from 'react';
import Line from '../Line/Line';
import SearchQuery from './SearchQuery';
import {
    StyledHeading,
    StyledFormWrapper,
    StyledInput,
    StyledButton,
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