import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import './SearchBox.css';

interface ParsedQuery {
  query?: string;
}

const SearchBox = () => {
  const location = useLocation();
  const history = useNavigate();

  const { query = '' }: ParsedQuery = queryString.parse(location.search);
  const [stateSearch, setStateSearch] = useState(query);
  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setStateSearch(e.target.value);
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    history(`/items?search=${stateSearch}`);
  };
  return (
    <nav>
      <div className='logo' />
      <div className='search-box'>
        <input
          type='text'
          placeholder='Nunca dejes de buscar'
          name='searchText'
          value={stateSearch}
          onChange={handleInputChange}
          onKeyPress={(event) => event.key === 'Enter' && handleSearch(event)}
        />
        <button type='button' onClick={handleSearch}>
          <i className='fa fa-search' />
        </button>
      </div>
    </nav>
  );
};

export default SearchBox;
