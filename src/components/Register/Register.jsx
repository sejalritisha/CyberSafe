import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit the complaint
    console.log({ name, email, complaint });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md">
      <label htmlFor="name" className="block mb-2">
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border-gray-300 rounded-md p-2 mt-1"
          required
        />
      </label>
      <label htmlFor="email" className="block mb-2">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border-gray-300 rounded-md p-2 mt-1"
          required
        />
      </label>
      <label htmlFor="complaint" className="block mb-2">
        Complaint:
        <textarea
          id="complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          className="block w-full border-gray-300 rounded-md p-2 mt-1"
          required
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Submit Complaint
      </button>
    </form>
  );
};

export default Register;
