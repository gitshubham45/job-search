import React, { useState } from 'react';
import Select from 'react-select';
import techStack from './techStack'; // Your tech stack list

// Convert techStack to react-select-compatible options
const createOptions = (stack) => {
  return stack.map((item) => ({
    value: item,
    label: item,
  }));
};

const TechStackDropdown = () => {
  const [selectedTech, setSelectedTech] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedTech(selectedOptions);
  };

  return (
    <Select
      isMulti
      options={createOptions(techStack)}
      value={selectedTech}
      onChange={handleChange}
      placeholder="Select tech stack..."
    />
  );
};

export default TechStackDropdown;
