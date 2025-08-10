import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [subject, setSubject] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await axios.get('http://localhost:5000/api/profiles', {
        params: { subject, location },
      });
      setProfiles(response.data);
    };
    fetchProfiles();
  }, [subject, location]);

  return (
    <div>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Filter by subject" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Filter by location" />
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
export default ProfileList;