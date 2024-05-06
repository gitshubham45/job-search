import React, { useState } from 'react';
import Select from 'react-select';
import workPreference from './workPreference';

// Convert techStack to react-select-compatible options
const createOptions = (preference) => {
  return preference.map((item) => ({
    value: item,
    label: item,
  }));
};

const WorkPreferenceDropdown = () => {
  const [selectedWorkPreference, setSelectedWorkPreference] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedWorkPreference(selectedOptions);
  };

  return (
    <Select
      isMulti
      options={createOptions(workPreference)}
      value={selectedWorkPreference}
      onChange={handleChange}
      placeholder="Work Preference"
    />
  );
};

export default WorkPreferenceDropdown;
