// src/Home.js
import React, { useState } from 'react';
import JobList from '../Components/Parts/JobList';
import RoleDropdown from "../Components/Dropdown/Roles/RoleDropdown";
import EmployeeDropdown from '../Components/Dropdown/Employee/EmployeeDropdown';
import TechStackDropdown from '../Components/Dropdown/TechStack/TechStackDropdown';
import WorkPreferenceDropdown from '../Components/Dropdown/WorkPreference/WorkPreferenceDropdown';
import BasePayDropdown from '../Components/Dropdown/BasePay/BasePayDropdown';
import MinExpDropDown from '../Components/Dropdown/Experience/MinExpDropDown';
import SearchBox from '../Components/Search/SearchBox';
import './DropdownContainer.css';
import './home.css'

const Home = () => {

    const [debouncedQuery, setDebouncedQuery] = useState(''); // State for the debounced query
    const [timeoutId, setTimeoutId] = useState(null); // State to hold the timeout ID

    const [selectedRoles, setSelectedRoles] = useState([]); // State to hold the selected roles
    const [selectedBasePay, setSelectedBasePay] = useState('');
    const [selectedEmployeeRanges, setSelectedEmployeeRange] = useState('');
    const [selectedMinExp, setSelectedMinExp] = useState('');
    const [selectedTechStack, setSelectedTechStack] = useState('');
    const [selectedWorkPreference, setSelectedWorkPreference] = useState('');


    const handleSearchChange = (e) => {
        const newQuery = e.target.value;

        // Clear the existing timeout if any
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout
        const newTimeoutId = setTimeout(() => {
            setDebouncedQuery(newQuery); // Update the debounced query after delay
        }, 300); // 300 milliseconds delay

        setTimeoutId(newTimeoutId); // Save the new timeout ID
    };

    const handleRoleChange = (roles) => {
        console.log(roles);
        setSelectedRoles(roles);
    }

    const handleBasePayChange = (basePay) => {
        setSelectedBasePay(basePay);

    }

    const handleEmployeeRangeChange = (employeeRange) => {
        setSelectedEmployeeRange(employeeRange);
    }

    const handleMinExpChange = (exp) => {
        setSelectedMinExp(exp);
    }

    const handleTechStackChange = (techStack) => {
        setSelectedTechStack(techStack)
    }

    const handleWorkPreferenceChange = (preference) => {
        setSelectedWorkPreference(preference);
    }


    return (
        <div className="home" style={styles.container}>
            <h1>Welcome to Job Listings</h1>
            <div className="dropdown-container">
                <div className="dropdown-wrapper">
                    <RoleDropdown
                        handleRoleChange={handleRoleChange}
                    />
                </div>
                <div className="dropdown-wrapper">
                    <EmployeeDropdown
                        onChange={handleEmployeeRangeChange}
                    />
                </div>
                <div className="dropdown-wrapper">
                    <TechStackDropdown
                        onChange={handleTechStackChange}
                    />
                </div>
                <div className="dropdown-wrapper">
                    <WorkPreferenceDropdown
                        onChange={handleWorkPreferenceChange}
                    />
                </div>
                <div className="dropdown-wrapper">
                    <MinExpDropDown
                        onnChange={handleMinExpChange}
                    />
                </div>
                <div className="dropdown-wrapper">
                    <BasePayDropdown
                        onChange={handleBasePayChange}
                    />
                </div>
                <div className="dropdown-wrapper">
                    <SearchBox
                        value={debouncedQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className='jobs'>
                <JobList
                    debounceQuery={debouncedQuery}
                    selectedRoles={selectedRoles}
                    selectedBasePay={selectedBasePay}
                    selectedEmployeeRange={selectedEmployeeRanges}
                    selectedMinExp={selectedMinExp}
                    selectedTechStack={selectedTechStack}
                    selectedWorkPreference={selectedWorkPreference}
                />
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
