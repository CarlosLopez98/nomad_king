import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Avatar from '../../components/Avatar'
import { Link } from 'react-router-dom'

import avatars from '../../data/avatars'

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
                avatars.map((avatar, index) => (
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

        <section className="info">
          <div className="info-1">
            <h3>Find places around the city</h3>
            <div className="ilustration"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a mollis  ex. Vivamus in porta turpis, a bibendum libero. Duis maximus ac purus  vitae egestas. Donec rhoncus placerat neque, eget blandit lacus bibendum  eget.</p>
          </div>

          <div className="info-2">
            <h3>Arrive and work without problems</h3>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
