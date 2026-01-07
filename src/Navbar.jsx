import React from "react";

function Navbar() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const authenticatedUser = () => {
    setIsUserAuthenticated(true);
    console.log("User authenticated Value", isUserAuthenticated);
  };

  const renderAuthenticationScreen = () => {
    // computations

    if (!isUserAuthenticated) {
      return (
        <button className="navbar-button-signin" onClick={authenticatedUser}>
          Sign In
        </button>
      );
    } else {
      return <button className="navbar-button">Get Started</button>;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">SaaS Project</div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About Us
        </a>
        <a href="#team" className="navbar-link">
          Team
        </a>
        {/* User Clicks on Signin -> updates signin to "Get started" */}
        {/* 
        
        {isUserAuthenticated ? (
          <button className="navbar-button">Get Started</button>
        ) : (
          <button className="navbar-button-signin" onClick={authenticatedUser}>
            Sign In
          </button>
        )} */}

        {/* {isUserAuthenticated && (
          <button className="navbar-button">Get Started</button>
        )} */}

        {renderAuthenticationScreen()}
      </div>
    </nav>
  );
}

export default Navbar