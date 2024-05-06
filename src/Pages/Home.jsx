// src/Home.js
import React from 'react';
import JobList from '../Components/Parts/JobList';

const Home = () => {
  return (
    <div className="home" style={styles.container}>
      <h1>Welcome to Job Listings</h1>
      <JobList />
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
  },
};

export default Home;
