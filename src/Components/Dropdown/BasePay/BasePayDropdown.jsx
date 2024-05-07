import React, { useState } from 'react';
import Select from 'react-select';
import './basePayDropdown.css';
import basePayData from './basePayData'

const createOptions = (basePayData) => {
  return basePayData.map((item) => ({
    value: item,
    label: item,
  }));
};

const BasePayDropdown = () => {
  const [selectedBasePay, setSelectedBasePay] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedBasePay(selectedOptions);
    console.log(selectedBasePay);
  };

  return (
    <Select
      options={createOptions(basePayData)}
      value={selectedBasePay}
      onChange={handleChange}
      placeholder="Min Base Pay"
    />
  );
};

export default BasePayDropdown;
