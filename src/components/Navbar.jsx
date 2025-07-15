const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="public/Logo SMAIT.svg"
          alt="STUDENTSYNC Logo"
          className="logo"
        />
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-links">Home</a>
        <a href="/add" className="nav-link">Add Student</a>
        <a href="/students" className="nav-button">All Students</a>
      </div>
    </nav>
  );
};

export default Navbar;
