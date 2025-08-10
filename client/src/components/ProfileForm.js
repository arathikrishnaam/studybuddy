import { useState } from 'react';
import axios from 'axios';

function ProfileForm() {
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/profiles',
        { subject, level, location, description },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Profile created');
    } catch (error) {
      alert('Error creating profile');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <input value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Level (e.g., Beginner)" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Profile</button>
    </form>
  );
}
export default ProfileForm;