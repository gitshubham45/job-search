import React, { useState } from 'react';
import "./jobCard.css"
import _ from 'lodash';

const JobCard = ({ job }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const description = job?.jobDetailsFromCompany;
    console.log(job);


    const truncatedDescription = isExpanded ? description : `${description?.slice(0, 400)}...`;

    return (
        <div className="card" >
            <div className='time'>
                <p></p>
            </div>
            <div className='content'>
                {/* <p>Hello</p> */}
                <div className='roleInfoBox'>
                    <diV className="roleInfo">
                        <div className='logo'>
                            <img alt="Logo" src={job?.logoUrl} />
                        </div>
                        <diV className="roleDesc">
                            <div className='role'>
                                <h2>Role - {_.capitalize(job?.jobRole)}</h2>
                            </div>
                            <div className='companyName'>
                                <h3>Company - {_.capitalize(job?.companyName)}</h3>
                            </div>
                            <div className='location'>
                                <p>Location - {_.capitalize(job?.location)}</p>
                            </div>
                            <div className='salary'>
                                <p>Salary : {`${_.capitalize(job?.minJdSalary)} - ${_.capitalize(job?.maxJdSalary)} LPA`}</p>
                            </div>
                        </diV>
                    </diV>
                </div>
                <div>
                    <p>
                        {truncatedDescription}
                        <button className="toggleButton" onClick={() => setIsExpanded(!isExpanded)} >
                            {isExpanded ? 'Show less' : 'Show more'}
                        </button>
                    </p>
                    <div >
                        <p className='minExpClass'>Minimum Experience</p>
                        <p>
                            {job.minExp !== undefined && job.minExp !== null
                                ? `${job.minExp} years`
                                : 'NA'} 
                        </p>
                    </div>
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
