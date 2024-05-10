import React, { useState, useEffect } from 'react';
import './Modal.css';

const AddEmployeeModal = ({ isOpen, onClose, onSubmit, editEmployee }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setSalary(editEmployee.salary);
      setEmail(editEmployee.email);
      setMobile(editEmployee.mobile);
      setAddress(editEmployee.address);
    } else {
      setName('');
      setSalary('');
      setEmail('');
      setMobile('');
      setAddress('');
    }
  }, [editEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, salary, email, mobile, address });
    setName('');
    setSalary('');
    setEmail('');
    setMobile('');
    setAddress('');
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>  
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Salary:</label>
            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Contact:</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <button type="submit">{editEmployee ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
