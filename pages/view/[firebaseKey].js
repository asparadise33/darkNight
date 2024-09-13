import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getSingleJob, deleteJob } from '../../api/JobData';

export default function ViewJob() {
  const [jobDetails, setjobDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleJob(firebaseKey).then(setjobDetails);
  }, [firebaseKey]);

  const deleteThisJob = () => {
    if (window.confirm(`Delete ${jobDetails.job_name}?`)) {
      deleteJob(jobDetails.firebaseKey).then(() => router.push('/'));
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="text-black ms-5 details">
      <Card.Title>Job Name: {jobDetails.job_name}</Card.Title>
      <Card.Body>
        <p className="card-text bold">Company Name: {jobDetails.company_name}</p>
        <p className="card-text bold">Job Board Name: {jobDetails.board_name}</p>
        <p className="card-text bold">Job Description: {jobDetails.description}</p>
        <p className="card-text bold">Job Category: {jobDetails.category}</p>
        <p className="card-text bold">Notes: {jobDetails.notes}</p>
        <p className="card-text bold">Date Applied: {jobDetails.date_applied}</p>
        <Button variant="dark" onClick={deleteThisJob} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
