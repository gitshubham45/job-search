// src/RoleDropdown.js
import React from 'react';
import rolesData from './rolesData';
import './roleDropdown.css'; // Create CSS for styling

const RoleDropdown = ({ onRoleChange }) => {
  return (
    <select className="role-dropdown" onChange={(e) => onRoleChange(e.target.value)}>
      <option value="">Role</option> {/* Placeholder option */}
      {rolesData.map((category) => (
        <optgroup key={category.category} label={category.category}>
          {category.roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default RoleDropdown;
