import React, { useEffect, useState, useCallback } from 'react';
import JobCard from '../JobCard';
import './jobList.css';
import LoadingOverlay from './Spinner/LoadingOverlay'; // Import the overlay
import filterJobs from '../../Config/filter';

const JobList = ({
    debounceQuery,
    selectedRoles,
    selectedBasePay,
    selectedEmployeeRange,
    selectedMinExp,
    selectedTechStack,
    selectedWorkPreference
}) => {
    const [jobData, setJobData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 12;

    console.log(selectedRoles);


    const fetchJobData = useCallback(async () => {
        if (isLoading) return; // Prevent multiple fetches

        setIsLoading(true); // Set loading state to true

        setTimeout(async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const body = JSON.stringify({
                    limit,
                    offset,
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body,
                };

                const response = await fetch(
                    "https://api.weekday.technology/adhoc/getSampleJdJSON",
                    requestOptions
                );
                const result = await response.json();

                setJobData((prevData) => [...prevData, ...result.jdList]); // Append new data
                setOffset((prevOffset) => prevOffset + limit); // Update offset
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false); // Reset loading state
            }
        }, 500);
    }, [isLoading, limit, offset]);

    useEffect(() => {
        fetchJobData(); // Fetch initial data on mount
    }, []);

    const handleScroll = useCallback(() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 50 && !isLoading) {
            fetchJobData(); // Trigger fetch when reaching near the bottom
        }
    }, [fetchJobData, isLoading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup
        };
    }, [handleScroll]);

    // const filteredJobs = debounceQuery?.trim()
    //     ? jobData.filter((job) => {
    //         const matchesSearchQuery =
    //             job?.jobRole?.toLowerCase().includes(debounceQuery.toLowerCase()) ||
    //             job?.jobDetailsFromCompany?.toLowerCase().includes(debounceQuery.toLowerCase()) ||
    //             job?.companyName?.toLowerCase().includes(debounceQuery.toLowerCase()) ||
    //             job?.location?.toLowerCase().includes(debounceQuery.toLowerCase());

    //         const matchesSelectedRoles = selectedRoles.length > 0
    //             ? selectedRoles.some((role) =>
    //                 job?.jobRole?.toLowerCase() === role.value?.toLowerCase()
    //             )
    //             : true; // If no roles are selected, do not filter by role

    //         return matchesSearchQuery && matchesSelectedRoles;
    //     })
    //     : jobData; // If no query, return the full list

    const filteredJobs = filterJobs(
        jobData, 
        debounceQuery, 
        selectedRoles ,
        selectedBasePay ,
        selectedEmployeeRange ,
        selectedMinExp ,
        selectedTechStack ,
        selectedWorkPreference 
    )

    const  jobs = filterJobs.length > 0 ? filteredJobs : jobData;



    return (
        <div className="jobList">
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
            <LoadingOverlay isLoading={isLoading} /> {/* Display overlay if loading */}
        </div>
    );
};

export default JobList;
