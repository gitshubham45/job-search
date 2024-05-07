// src/Home.js
import React from 'react';
import JobList from '../Components/Parts/JobList';
import RoleDropdown from "../Components/Dropdown/Roles/RoleDropdown";
import EmployeeDropdown from '../Components/Dropdown/Employee/EmployeeDropdown';
import TechStackDropdown from '../Components/Dropdown/TechStack/TechStackDropdown';
import WorkPreferenceDropdown from '../Components/Dropdown/WorkPreference/WorkPreferenceDropdown';
import './DropdownContainer.css';
import './home.css'

const Home = () => {
    return (
        <div className="home" style={styles.container}>
            <h1>Welcome to Job Listings</h1>
            <div className="dropdown-container">
                <div className="dropdown-wrapper">
                    <RoleDropdown />
                </div>
                <div className="dropdown-wrapper">
                    <EmployeeDropdown />
                </div>
                <div className="dropdown-wrapper">
                    <TechStackDropdown />
                </div>
                <div className="dropdown-wrapper">
                    <WorkPreferenceDropdown />
                </div>
            </div>
            <div className='jobs'>
                <JobList />
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '16px',
    },
};

export default Home;
