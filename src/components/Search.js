import React from 'react'

const Search = (words) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={e => words.handleChange(e.target.value.toUpperCase())}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
