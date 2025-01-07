import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const Modal = ({ userId, onClose }) => {
  const [birthDate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('tokens')).access.token;
      const response = await axios.patch(
        `${BASE_URL}/users/${userId}`,
        {
          birthDate,
          gender,
          phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update user data in local storage
      const updatedUser = response.data;
      console.log(updatedUser);
      localStorage.setItem('user', JSON.stringify({ ...updatedUser }));

      onClose();
    } catch (err) {
      setError('Failed to update profile.' + err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h5>Complete Your Profile</h5>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-single profile-input-single">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              value={birthDate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          <div className="input-single profile-input-single">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-single profile-input-single">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="section__cta text-start">
            <button type="submit" className="cmn-button profile-update-button">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
