import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleJob } from '../../api/JobData';
import JobForm from '../../components/JobForm';

export default function EditJob() {
  const [editJob, setEditJob] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleJob(firebaseKey).then(setEditJob);
  }, [firebaseKey]);

  return (<JobForm obj={editJob} />);
}
