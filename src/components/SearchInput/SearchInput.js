import React from 'react'

import './search-input.css'

const SearchInput = ({onSearch}) => (
  <input
    className="form-control search-input"
    placeholder="Search"
    onChange={e => onSearch(e.target.value)} />
)

export default SearchInput