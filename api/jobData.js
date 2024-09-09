import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getJobs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Job.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// // TODO: DELETE BOOK
// const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve((data)))
//     .catch(reject);
// });

const getSingleJob = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Job/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createJob = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Job.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateJob = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Job/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getJobs, createJob, updateJob, getSingleJob,
};
