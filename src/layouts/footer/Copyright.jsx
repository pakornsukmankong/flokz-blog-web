import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <div className="text-center p-3 bg-gray-400 text-white">
      © {new Date().getFullYear()} Copyright:
      <Link className="text-white" to="/">
        &nbsp;FLOKZ BLOG
      </Link>
    </div>
  );
}

export default Copyright;
