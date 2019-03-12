import React from 'react';
import './search.css';

const Search = ({ filters, onChange, values }) => (
  <div>
    {Object.keys(filters).map(f => (
      <input
        key={filters[f].parameter}
        type={filters[f].type}
        placeholder={filters[f].placeholder}
        value={values[filters[f]]}
        onChange={e => onChange(e, filters[f].parameter)}
      />
    ))}
  </div>
);

export default Search;
