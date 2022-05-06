const Header = () => {
  return (
    <header className="text-gray-900  sticky mx-0 my-3 font-semibold ">
      <nav className=" flex flex-row justify-around flex-nowrap">
        <ul className="flex space-x-2 py-1 ">
          <li>
            <span className="btn-header">Log In</span>
          </li>
          <li>
            <span className="btn">Sign In</span>
          </li>
        </ul>
        <ul className="flex flex-row justify-around flex-nowrap space-x-2 py-1">
          <li>
            <div className="item">
              <span className="text-uppercase">Home</span>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="text-uppercase">Contact Me </span>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="text-uppercase">Video Browser</span>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="text-uppercase">Photo Browser</span>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="text-uppercase">
                <i className="logo">logo</i>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
