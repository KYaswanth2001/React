import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div className="image-container">
        <img
          src="https://media.istockphoto.com/id/905049450/photo/close-up-of-businessman-or-accountant-hand-holding-pen-working-making-notes-and-using-laptop.jpg?s=612x612&w=is&k=20&c=U6eAKcuJGq51R4KqiHQqCBuUcMJVtFwD29dNxx_jMdQ="
          alt="img1"
        />

        <div className="overlay">
          <h1>Empower Your Professional Journey with AI-Powered Platform</h1>
          <p>Find Your Next Job and Navigate Your Career Path with Confidence and Guidance</p>
        </div>
      </div>
      
      <div className="sub-1">
        <div>
          <h1>Empowering Your Professional Journey</h1>
          <p>
            Welcome to [your website name], where advanced artificial
            intelligence meets comprehensive career guidance to empower your
            professional journey.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1653669486845-e9d6239380d9?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNnx8am9iJTIwcG9ydGFsfGVufDB8fHx8MTcyMjQzNjQwM3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=861&h=735"
            alt="img2"
          />
        </div>
      </div>
      
      <div className="container">
        <div className="left">
          <h4>Personalized Career Advice</h4>
          <p>
            Receive actionable insights and tips to guide you every step of the
            way in resume writing, interview preparation, and career planning.
          </p>
          <img
            src="https://images.unsplash.com/photo-1653669486764-b1f229a57068?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyOHx8am9iJTIwcG9ydGFsfGVufDB8fHx8MTcyMjQzNjQwM3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=240"
            alt="img3"
          />
        </div>
        <div className="right">
          <h4>Tailored Job Recommendations</h4>
          <p>
            Get matched with opportunities that align with your aspirations,
            ensuring a perfect fit for your next career move.
          </p>
          <img
            src="https://images.unsplash.com/photo-1653669485641-8582ad808121?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNHx8am9iJTIwcG9ydGFsfGVufDB8fHx8MTcyMjQzNjQwM3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=240"
            alt="img4"
          />
        </div>
        
      </div>
      <div className='bottom'>
          <h1>Happy Customers</h1>
          <p>Read what our satisfied customers have to say 
            about their experience.</p>
        </div>

        
    </>
  );
}

export default Home;
