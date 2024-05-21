import React from 'react';
import './About.css';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <h2>Welcome to the About Page</h2>
        <p>This is the about page content.</p>
      </main>
    </div>
  );
};

export default Home;
