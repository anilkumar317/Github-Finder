import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className="navbar  bg-neutral mb-12 shadow-lg text-neutral-content">
      <div className=" container mx-auto  ">
        <div className="flex-none px-2 mx-2 ">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold ">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              HOME
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
