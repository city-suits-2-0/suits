//@ts-nocheck
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
function FeedbackForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]); // new state variable to store feedback data

  useEffect(() => {
    // make a GET request to the server to retrieve the feedback data
    axios.get('http://localhost:4000/api/feedback/all')
      .then(response => {
        setFeedbacks(response.data); // update the feedbacks state with the response data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await axios.post('http://localhost:4000/api/feedback/add', { name, message });
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  
  return (
    <div>
    <Navbar/>
    <form onSubmit={handleSubmit} className="container mt-5">
    {error && <p className="alert alert-danger">{error}</p>}
    {success && <p className="alert alert-success">Thank you for your feedback!</p>}
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="form-control"
        />
    </div>
   
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="form-control"
        />
    </div>
    <button type="submit" className="btn btn-primary" disabled={submitting}>
      Submit
    </button>
  </form>
  {feedbacks.length > 0 && (
        <div className="mt-5">
          <h3>Feedback:</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map(feedback => (
                <tr key={feedback._id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        </div>
  );
}

export default FeedbackForm;