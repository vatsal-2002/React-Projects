const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#" className="nav-item">Menu</li>
          <li href="#" className="nav-item">Location</li>
          <li href="#" className="nav-item">About</li>
          <li href="#" className="nav-item">Contact</li>
        </ul>
  
        <button className="nav-item">login</button>
      </nav>
    );
  };
  
  export default Navigation;