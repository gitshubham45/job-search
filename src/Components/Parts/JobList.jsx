import React, { useEffect, useState, useCallback } from 'react';
import JobCard from '../JobCard';
import './jobList.css';
import LoadingOverlay from './Spinner/LoadingOverlay'; // Import the overlay

const JobList = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;

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
    }, 500); // 1-second delay before fetching
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

  return (
    <div className="jobList">
      {jobData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
      <LoadingOverlay isLoading={isLoading} /> {/* Display overlay if loading */}
    </div>
  );
};

export default JobList;
