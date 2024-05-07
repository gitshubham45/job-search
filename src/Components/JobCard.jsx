// src/JobCard.js
import React, { useState } from 'react';
import "./jobCard.css"

const JobCard = ({ job }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const description = job?.jobDetailsFromCompany;


    const truncatedDescription = isExpanded ? description : `${description?.slice(0, 200)}...`;

    return (
        <div className="card" >
            <div className='time'>
                <p></p>
            </div>
            <div className='content'>
                {/* <p>Hello</p> */}
                <diV>
                    <h2>{job?.jobRole}</h2>
                    <h3>{job?.companyName}</h3>
                    <p>{job?.location}</p>
                </diV>
                <div>
                    <p>
                        {truncatedDescription}
                        <button className="toggleButton" onClick={() => setIsExpanded(!isExpanded)} >
                            {isExpanded ? 'Show less' : 'Show more'}
                        </button>
                    </p>
                    <p>Experience required: {job?.minExp} - {job?.maxExp} years</p>
                </div>

            </div>
            <diV className='apply'>
                <a href="/apply" target="_blank" rel="noopener noreferrer">
                    <button className="applyButton" >Apply Now</button>
                </a>
            </diV>
        </div>
    );
};



export default JobCard;
