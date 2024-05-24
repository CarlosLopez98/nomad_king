import React from 'react';
import './Login.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Login = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Welcome to the Login page</h2>
        <p>This is the login page content.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
