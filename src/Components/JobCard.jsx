// src/JobCard.js
import React, { useState } from 'react';
import "./jobCard.css"

const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, company, location, description, experience, applyLink } = job;

  const truncatedDescription = isExpanded ? description : `${description.slice(0, 100)}...`;

  return (
    <div className="card" >
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{location}</p>
      <p>
        {truncatedDescription}
        <button className="toggleButton" onClick={() => setIsExpanded(!isExpanded)} >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </p>
      <p>Experience required: {experience} years</p>
      <a href={applyLink} target="_blank" rel="noopener noreferrer">
        <button className="applyButton" >Apply Now</button>
      </a>
    </div>
  );
};



export default JobCard;
