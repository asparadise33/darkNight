/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getJobs } from '../api/JobData';
import JobCard from '../components/JobCard';
import Calendar from '../components/Calendar';

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
      <Calendar />
    </div>
  );
}

export default Home;
