import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Local Study Buddy Finder</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/browse">Browse Profiles</Link>
    </div>
  );
}
export default Home;