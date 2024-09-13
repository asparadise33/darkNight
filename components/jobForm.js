import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createJob, updateJob, getCategory } from '../api/ohboy';

const initialState = {
  job_name: '',
  company_name: '',
  board_name: '',
  description: '',
  notes: '',
  date_applied: '',
  category: '',
};

function JobForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState); // this hook always needs two values, inital and what we are updating it to be, allows for a component to be rerendered when the update func is called
  const [categories, setCategories] = useState([]);
  const router = useRouter(); // hook to route to different pages
  const { user } = useAuth(); // hook user specific
  // hook for after our API call occurs
  useEffect(() => {
    getCategory().then(setCategories);
    if (obj.category) setFormInput(obj);
  }, [obj, user]);
  // event handleChange tells the form what to do when updated
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // event handles the submit of the form either to create or update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateJob(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createJob(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateJob(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Job</h2>

      <FloatingLabel controlId="floatingInput1" label="Job Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name of Job"
          name="job_name"
          value={formInput.job_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Name of Company" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name of Company"
          name="company_name"
          value={formInput.company_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Add Job Board" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add Job Board"
          name="board_name"
          value={formInput.board_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Job Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Job Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Job Category">
        <Form.Select
          type=""
          placeholder="Job Category"
          name="category"
          onChange={handleChange}
          className="mb-3"
          value={formInput.category}
          required
        >
          <option value="">Select a Job Category</option>
          {
            categories.map((category) => (
              <option>
                {category.category}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Add Notes" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add Notes"
          name="notes"
          value={formInput.notes}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Date Applied" className="mb-3">
        <Form.Control
          type="text"
          placeholder="date_applied"
          name="date_applied"
          value={formInput.date_applied}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button variant="warning" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Job</Button>
    </Form>
  );
}

JobForm.propTypes = {
  obj: PropTypes.shape({
    job_name: PropTypes.string,
    company_name: PropTypes.string,
    board_name: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
    date_applied: PropTypes.string,
    category: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

JobForm.defaultProps = {
  obj: initialState,
};

export default JobForm;
