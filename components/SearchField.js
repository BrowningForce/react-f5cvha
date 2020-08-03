import React from 'react';

const SearchField = ({ query, onChange }) => {
  return (
    <div className="input-container">
    <input type="text" value={query} onChange={e => onChange(e)} placeholder="Search Products..." />
    </div>
  );
}

export default SearchField;