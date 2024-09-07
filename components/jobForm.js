import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createJob, updateJob } from '../api/JobData';

const initialState = {
  job_name: '',
  company_name: '',
  email: '',
};

function JobForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateJob(formInput).then(() => router.push(`/edit/${obj.firebaseKey}`));
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
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>

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

      <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name of Company"
          name="company_name"
          value={formInput.company_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add Email"
          name="email"
          value={formInput.email}
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
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

JobForm.defaultProps = {
  obj: initialState,
};

export default JobForm;
