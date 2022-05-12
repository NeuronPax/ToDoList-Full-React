import React from 'react'

import './filter-status.css'

const FilterStatus = () => (
  <div className="btn-group">
    <button className="btn btn-info">All</button>
    <button className="btn btn-outline-secondary">Active</button>
    <button className="btn btn-outline-secondary">Done</button>
  </div>
)

export default FilterStatus