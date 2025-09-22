import React from 'react';

function FilterSidebar() {
  return (
    <div className="filter-sidebar">
      <h3>Filter</h3>
      {/* ใส่ form/option filter ตามที่ต้องการ */}
      <label>
        <input type="checkbox" /> E-Book
      </label>
      <br />
      <label>
        <input type="checkbox" /> Hardcover
      </label>
    </div>
  );
}

export default FilterSidebar;