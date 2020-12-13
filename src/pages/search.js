import React from 'react';
import Search from '../components/Search/Search.js'
import MainLayout from '../layouts/index.js';

const SearchPage = () => {
    return (
        <MainLayout isBaner>
        <Search />
        </MainLayout>
    );
}

export default SearchPage;