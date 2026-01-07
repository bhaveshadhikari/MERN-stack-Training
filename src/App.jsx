import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./NavBar";
import AboutUsSection from "./AboutUs";
import Footer from "./Footer";
// Navbar Component


// properties -> {title , backgroundColor, onPress}
function Button(props) {
  return (
    <div
      style={{
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        marginTop: 10,
        padding: 5,
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "cursive",
        }}
      >
        {props.title}
      </span>
    </div>
  );
}
// Landing/Hero Section
function LandingSection() {
  return (
    <section id="home" className="landing-section">
      <div className="landing-content">
        <h1 className="landing-title">One Tool For Doing It All Together</h1>
        <p className="landing-description">
          With comprehensive competitor analysis, detailed web research, and
          strategic internal linking, your articles will be optimized for
          success. Transform your workflow with our AI-powered platform.
        </p>
        <div className="landing-buttons">
          <Button title={"Book a Demo"} backgroundColor={"purple"} />
          <Button title={"Use AI"} backgroundColor={"blue"} />
        </div>
      </div>
    </section>
  );
}

// About Team Section
function AboutTeamSection() {
  // json <- API request
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech",
      image: "👨‍💼",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description: "Engineering excellence and innovation",
      image: "👩‍💻",
    },
    {
      name: "Mike Johnson",
      role: "Head of Product",
      description: "Product strategy and user experience",
      image: "👨‍🎨",
    },
    {
      name: "Sarah Williams",
      role: "Head of Marketing",
      description: "Growth and brand strategy expert",
      image: "👩‍💼",
    },
    {
      name: "Redmen",
      role: "HOE",
      description: "Engineering Design and Architect",
      image: "👨‍🎨",
    },
  ];
  const displayTeams = () => {
    return (
      <>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-avatar">{member.image}</div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <section id="team" className="about-team-section">
      <div className="section-container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the talented individuals who make our vision a reality
        </p>
        <div className="team-grid">{displayTeams()}</div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <LandingSection />
      <AboutUsSection />
      <AboutTeamSection />
      <Footer />
    </div>
  );
}

export default App;
