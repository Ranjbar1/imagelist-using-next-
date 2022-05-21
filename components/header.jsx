import Link from 'next/link';
const Header = () => {
  return (
    <section classNameName="header-navbar">
      <div className="navbar-container">
        <div className="navbar-container">
          <Link href="../">
            <a className="navbar-item-logo">
              <span className="logo">
                A.N.Ranjbar<span className="text-indigo-600">.</span>
              </span>
            </a>
          </Link>
          <nav className="nav">
            <Link href="../">
              <a className="nav-item">Home</a>
            </Link>
            <Link href="../VideoBrowser">
              <a className="nav-item">Video Browser</a>
            </Link>
            <Link href="../ImageBrowser">
              <a className="nav-item">Image Browser</a>
            </Link>
            <Link href="../about">
              <a className="nav-item">Contact Me</a>
            </Link>
          </nav>
        </div>
        {/* 
        <div className="login-bar">
          <Link href="#" className="login-action">
            Sign in
          </a>
          <a href="#" className="login-action">
            Sign up
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Header;

/*  <header classNameName="text-gray-900  sticky mx-0 my-3 font-semibold text-sm">
      <nav classNameName=" flex flex-row justify-around flex-nowrap">
        <ul classNameName="flex space-x-2 py-1 ">
          <li>
            <span classNameName="btn-header">Log In</span>
          </li>
          <li>
            <span classNameName="btn">Sign In</span>
          </li>
        </ul>
        <ul classNameName="flex flex-row justify-around flex-nowrap space-x-2 py-1">
          <li>
            <div classNameName="item">
              <span classNameName="text-uppercase">Home</span>
            </div>
          </li>
          <li>
            <div classNameName="item">
              <span classNameName="">
                <Link href="/about">Contact Me</Link>
              </span>
            </div>
          </li>
          <li>
            <div classNameName="item">
              <span classNameName="text-uppercase">
                <Link href="../VideoBrowser/">Video Browser</Link>
              </span>
            </div>
          </li>
          <li>
            <div classNameName="item">
              <Link href="../ImageBrowser/">Photo Browser</Link>
            </div>
          </li>
          <li>
            <div classNameName="item">
              <span classNameName="text-uppercase">
                <i classNameName="logo">logo</i>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>*/
