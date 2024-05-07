import React, { useState } from 'react';
import rolesData from './rolesData';
import './roleDropdown.css'; // Create CSS for styling
import Select from 'react-select';



const getOptions = (data) => {
    return data.map((group) => ({
        label: group.category,
        options: group.roles.map((role) => ({ value: role, label: role })),
    }));
};

const RoleDropdown = ({handleRoleChange}) => {

    const [selectedRoles, setSelectedRoles] = useState([]);

    const handleChange = (selectedOptions) => {
        setSelectedRoles(selectedOptions);
        handleRoleChange(selectedOptions);
    };

    return (
        <Select
            isMulti
            options={getOptions(rolesData)} // Use transformed options
            value={selectedRoles}
            onChange={handleChange}
            placeholder="Select roles"
        />
    );
};

export default RoleDropdown;
