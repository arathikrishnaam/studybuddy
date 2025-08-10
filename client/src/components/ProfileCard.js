function ProfileCard({ profile }) {
  return (
    <div>
      <h3>{profile.subject}</h3>
      <p>Level: {profile.level}</p>
      <p>Location: {profile.location}</p>
      <p>{profile.description}</p>
      <button>Contact</button>
    </div>
  );
}
export default ProfileCard;