import React from 'react';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="animate__animated animate__bounceInLeft animate__delay-1s x-large">
            D E V E E T
          </h1>
          <h3 className="animate__animated animate__bounceInUp animate__delay-1s lead">
            An efficient social media platform where all developers meet!
          </h3>
          <div className="buttons animate__animated animate__bounceInDown animate__delay-1s">
            <a href="register.html" className="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" className="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
