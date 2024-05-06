import React, { useState } from 'react';
import Select from 'react-select';
import employeeRanges from './employeeRanges';
import './employeeDropdown.css'; // Styling for the dropdown

// Convert employeeRanges to the format required by react-select
const createOptions = (ranges) => {
  return ranges.map((range) => ({
    value: range,
    label: range,
  }));
};

const EmployeeDropdown = () => {
  const [selectedRanges, setSelectedRanges] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedRanges(selectedOptions);
  };

  return (
    <Select
      isMulti
      options={createOptions(employeeRanges)}
      value={selectedRanges}
      onChange={handleChange}
      placeholder="Number of Employees"
    />
  );
};

export default EmployeeDropdown;