import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const EditProfileForm = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthDate, setBirthDate] = useState(user.birthDate || '');
  const [gender, setGender] = useState(user.gender || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('tokens')).access.token;
      await axios.patch(
        `${BASE_URL}/users/${user._id}`,
        {
          name,
          email,
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
      
      // Update user in localStorage with the new data
      const updatedUser = { ...user, name, email, birthDate, gender, phoneNumber };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      onClose();
    } catch (err) {
      setError('Failed to update profile.' + err);
    }
  };

  return (
    <div className="edit-profile__tab">
      <button className="back-button" onClick={onClose}>
        &lt; Back
      </button>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-single profile-input-single">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-single profile-input-single">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-single profile-input-single">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
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
  );
};

export default EditProfileForm;