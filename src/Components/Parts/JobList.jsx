import React from 'react';
import JobCard from '../JobCard';

const JobList = () => {
  const jobData = [
    {
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      description: 'Develop and maintain software applications and improve processes...',
      experience: 2,
      applyLink: 'https://example.com/apply1',
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'New York, NY',
      description: 'Create interactive user interfaces...',
      experience: 3,
      applyLink: 'https://example.com/apply2',
    },
    {
      title: 'Backend Developer',
      company: 'DataWorks',
      location: 'Austin, TX',
      description: 'Design and implement server-side logic...',
      experience: 5,
      applyLink: 'https://example.com/apply3',
    },
  ];

  return (
    <div>
      {jobData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
