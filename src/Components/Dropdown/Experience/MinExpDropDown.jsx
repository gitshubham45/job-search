import React, { useState } from 'react';
import Select from 'react-select';
import minExpData from './minExpData'

const createOptions = (minExpData) => {
  return minExpData.map((item) => ({
    value: item,
    label: item,
  }));
};

const MinExpDropDown = () => {
  const [selectedMinExp, setSelectedMinExp] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedMinExp(selectedOption);
  };

  return (
    <Select
      options={createOptions(minExpData)}
      value={selectedMinExp}
      onChange={handleChange}
      placeholder="Min. Experience"
    />
  );
};

export default MinExpDropDown;
