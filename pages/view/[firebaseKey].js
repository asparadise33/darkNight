import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleJob } from '../../api/JobData';
import ViewJobCard from '../../components/SingleJobCard';

export default function ViewJob() {
  const [jobDeet, setJobDeet] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getTheJob = () => {
    getSingleJob(firebaseKey).then(setJobDeet);
  };

  useEffect(() => {
    getTheJob();
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <ViewJobCard jobObj={jobDeet} />
    </div>
  );
}
