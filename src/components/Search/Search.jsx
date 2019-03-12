import React from 'react';
import './search.css';

const Search = ({ filters, onChange, values }) => (
  <div className="card card-darken">
    {Object.keys(filters).map(f => (
      <span key={filters[f].parameter} className="search-field">
        <label className="search-label" htmlFor={filters[f].parameter}>
          {filters[f].field}
        </label>
        <input
          className="search-input"
          id={filters[f].parameter}
          type={filters[f].type}
          placeholder={filters[f].field}
          value={values[filters[f]]}
          onChange={e => onChange(e, filters[f].parameter)}
        />
        <div className="search-tip">{filters[f].tip}</div>
      </span>
    ))}
  </div>
);

export default Search;
