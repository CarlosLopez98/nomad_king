import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
