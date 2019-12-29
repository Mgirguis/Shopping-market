import React from 'react';
import './homepage.scss';

const HomePage = () => {
    return (
      // Main container
      <div className="homepage">
        <h1>Welcome to my Homepage</h1>
        <div className="directory-menu">
          {/* Menu item */}
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Hats</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Jackets</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Sneackers</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Men Shirts</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Women Shirts</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default HomePage;