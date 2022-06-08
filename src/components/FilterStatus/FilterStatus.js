import React from 'react'

import './filter-status.css'

const FilterStatus = ({filter, onFilter}) => {
  const btn = ['All', 'Active', 'Done']
  return (
    <div className="btn-group">
      {btn.map(name => (
        <button
          key={name}
          className={`btn btn-${name === filter ? 'info' : 'outline-secondary'}`}
          onClick={() => onFilter(name)}>
            {name}
        </button>
      ))}
    </div>
  )
}

export default FilterStatus