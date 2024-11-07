import React, { useEffect } from "react";
import { useFirebase } from '../context/Firebase'; 

const HomePage = () => {
  const { signinWithGoogle } = useFirebase();

  useEffect(() => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1s ease-in-out";
      document.body.style.opacity = 1;
    }, 100);
  }, []);

  const handleProfileClick = () => {
    signinWithGoogle()
      .then((result) => {
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <header style={styles.header}>
        <h1 style={styles.logo}>ASPIRANTS LABYRINTH</h1>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="/">Home</a>
          <a style={styles.navLink} href="/dashboard">Dashboard</a>
          <a style={styles.navLink} href="/resources">Resources</a>
          <a style={styles.navLink} href="/tools">Tools</a>
          <div style={styles.profileIcon} onClick={handleProfileClick}>
            <img
              src="/profile-icon.png"
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>WELCOME TO THE JOURNEY</h2>
          <p style={styles.heroDescription}>
            The JEE journey goes beyond mastering formulas—it's a true test of mental endurance, resilience, and self-belief. Like a hero navigating the underworld, every aspirant faces their own Hydra of doubts, distractions, and pressure. This interactive experience captures the emotional highs and lows of JEE preparation, helping you reflect on the mental challenges that shape your success.
          </p>
          <p style={styles.heroDescription}>
            Remember, the road to success is not just about mastering academic concepts but also about developing a mindset that allows you to overcome every obstacle. The journey builds both knowledge and character.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundImage: "/bg.jpeg", // Placeholder background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    animation: "fadeIn 0.5s ease-in",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "rgba(0, 0, 0, 0.7)", // Slightly transparent background for header
    borderBottom: "1px solid #ccc",
    animation: "slideIn 1s ease-in-out",
  },
  logo: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "42px",
    textAlign: "left",
  },
  nav: {
    display: "flex",
    gap: "30px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",
  },
  profileIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "60px",
    padding: "20px",
    animation: "fadeIn 2s ease-in",
  },
  heroText: {
    maxWidth: "600px",
    marginBottom: "30px",
  },
  heroTitle: {
    fontFamily: "Grenze Gotisch, serif",
    fontSize: "60px",
    fontWeight: 400,
    textAlign: "center",
    animation: "slideIn 2s ease-in-out",
  },
  heroDescription: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    margin: "20px 0",
    animation: "fadeIn 2.5s ease-in",
  },
  image: {
    width: "80%",
    maxWidth: "500px",
    height: "auto",
    marginTop: "20px",
    animation: "fadeIn 2s ease-in-out",
  },
};

export default HomePage;
