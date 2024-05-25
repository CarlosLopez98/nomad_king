import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';

import avatars from '../../data/avatars';

// Illustrations
import searchIl from '../../assets/images/searching.svg';
import meetingIl from '../../assets/images/meeting.svg';
import coupleIl from '../../assets/images/couple.svg';
import travelIl from '../../assets/images/travel.svg';

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
            <div className="ilustration">
              <div className="box"></div>
              <img src={searchIl} alt="Girl searching in the platform." width={800} />
            </div>
            <p>Find the perfect work spot in any city! Our platform helps remote workers discover efficient, convenient locations to stay productive. Explore top-rated cafes, coworking spaces, and more tailored to your needs.</p>
          </div>

          <div className="info-2">
            <h3>Arrive and work without problems</h3>
            <div className="ilustration">
              <div className="circle"></div>
              <img src={meetingIl} alt="Girls having a meeting." width={800} />
              <p>Arrive in any city and start working seamlessly! Our platform connects remote workers with ideal locations for productivity. Discover cafes, coworking spaces, and more designed for your remote work needs.</p>
            </div>
          </div>

          <div className="info-3">
            <div className="ilustration">
              <h3 className="text-meet">Meet new<br />people</h3>
              <h3 className="text-travel"><span>Keep</span><br /> traveling</h3>
              <img src={coupleIl} alt="A couple resting in their backs." width={800} className="couple" />
              <img src={travelIl} alt="A couple sitting in a motorcicle." width={800} className="travel" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
