import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap';
import { deleteJob } from '../api/JobData';

function ViewJobCard({ jobObj, onUpdate }) {
  console.warn('this is my job object', jobObj);
  const deleteThisJob = () => {
    if (window.confirm(`Delete ${jobObj.job_name}?`)) {
      deleteJob(jobObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Title>{jobObj.job_name}</Card.Title>
      <Card.Body>
        <p className="card-text bold">{jobObj.company_name}</p>
        <p className="card-text bold">{jobObj.board_name}</p>
        <p className="card-text bold">{jobObj.description}</p>
        <p className="card-text bold">{jobObj.job_type}</p>
        <p className="card-text bold">{jobObj.notes}</p>
        <p className="card-text bold">{jobObj.date_applied}</p>
        <Button variant="dark" onClick={deleteThisJob} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ViewJobCard.propTypes = {
  jobObj: PropTypes.shape({
    job_name: PropTypes.string,
    company_name: PropTypes.string,
    board_name: PropTypes.string,
    description: PropTypes.string,
    job_type: PropTypes.string,
    notes: PropTypes.string,
    date_applied: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ViewJobCard;
