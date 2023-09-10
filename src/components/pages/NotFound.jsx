import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notFound">
      <h1>Page is not found</h1>
      <NavLink to="..">Back to Home</NavLink>
    </div>
  );
}

export default NotFound;
