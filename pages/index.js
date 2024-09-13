/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getJobs } from '../api/ohboy';
import JobCard from '../components/JobCard';

function Home() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    getJobs(user.uid).then(setJobs);
  };
  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {jobs.map((job) => (
        <JobCard key={job.firebaseKey} jobObj={job} onUpdate={getAllJobs} />
      ))}
    </div>
  );
}

export default Home;
