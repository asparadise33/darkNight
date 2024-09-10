/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getJobs } from '../api/JobData';
import JobCard from '../components/JobCard';

function Home() {
  const [jobs, setJobs] = useState([]); // hook
  const { user } = useAuth();

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
