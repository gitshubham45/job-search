import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard';


const JobList = () => {

    const [jobData, setJobData] = useState();


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setJobData(result.jdList)
                console.log(result)
            })
            .catch((error) => console.error(error));


    }, [jobData])

    return (
        <div>
            {jobData?.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
    );
};

export default JobList;
