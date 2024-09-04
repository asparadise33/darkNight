// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';

// function JobCard({ jobObj, onUpdate }) {
//   const deleteThisJob = () => {
//     if (window.confirm(`Delete ${jobObj.title}?`)) {
//       deleteJob(jobObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Body>
//         <Card.Title>{jobObj.first_name} {jobObj.last_name}</Card.Title>
//         <p>{jobObj.email}</p>
//         <p className="card-text bold">{jobObj.favorite && <span>Favorite<br /></span> } ${jobObj.favorite}</p>
//         <Link href={`/author/${jobObj.firebaseKey}`} passHref>
//           <Button variant="primary" className="m-2">VIEW</Button>
//         </Link>
//         <Link href={`/author/edit/${jobObj.firebaseKey}`} passHref>
//           <Button variant="info">EDIT</Button> */
//         </Link>
//         <Button variant="danger" onClick={deleteThisJob} className="m-2">
//           DELETE
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// JobCard.propTypes = {
//   jobObj: PropTypes.shape({
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     favorite: PropTypes.bool,
//     email: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default JobCard;
