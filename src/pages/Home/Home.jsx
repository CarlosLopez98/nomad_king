import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Avatar from '../../components/Avatar'
import { Link } from 'react-router-dom'

import avatar from '../../assets/images/avatar1.jpg';

const users = [
  avatar,
  avatar,
  avatar,
  avatar,
  avatar,
  avatar,
  avatar,
  avatar
]

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="join-us">
          <div className="join-us-info">
            <h2>Join us and improve your experience as nomad in the city</h2>
            <div className="people">
              {
                users.map((avatar, index) => (
                  <Avatar key={index} src={avatar} />
                ))
              }
            </div>
            <div className="attributes">
              <p>🧑🏦Get to know the city and the culture</p>
              <p>👫🎈Meet new people</p>
              <p>💼📶Manages to work efficiently</p>
            </div>
          </div>

          <div className="join-us-form">
            <form action="">
              <input type="email" placeholder="Type your email..." />
              <button>Join us</button>
              <p>If you already have an account <Link>login</Link></p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
