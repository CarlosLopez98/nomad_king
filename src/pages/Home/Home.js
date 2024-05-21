import React from 'react';
import './Home.css';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
      </main>
    </div>
  );
};

export default Home;
