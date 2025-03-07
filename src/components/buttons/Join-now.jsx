import { Link } from 'react-router';
import './Join-now.modules.css';

function JoinNow() {
  return (
    <div>
      <Link to="/join">
        <button className="Join-Now">Join Now</button>
      </Link>
    </div>
  );
}

export default JoinNow