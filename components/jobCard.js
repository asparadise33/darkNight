import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function JobCard({ jobObj }) {
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{jobObj.job_name}</Card.Title>
      <Card.Body>
        <p className="card-text bold">{jobObj.company_name}</p>
        <Link href="/view" passHref>
          <Button variant="dark" className="m-2">VIEW</Button>
        </Link>
        <Link href="/edit" passHref>
          <Button variant="info">EDIT</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

JobCard.propTypes = {
  jobObj: PropTypes.shape({
    job_name: PropTypes.string,
    job_type: PropTypes.string,
    boardName: PropTypes.string,
    company_name: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default JobCard;
