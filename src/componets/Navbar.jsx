import React from 'react';

const Navbar = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
      animation: "slideIn 1.5s ease-in-out",
      backgroundColor: '#282c34', // Added background color
      color: 'white', // Text color
    },
    logo: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "42px",
      textAlign: "left",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "60px",
      animation: "slideIn 1.5s ease-in-out",
    },
    navLink: {
      color: "white", // Link color
      textDecoration: "none",
      fontSize: "26px",
      animation: "slideIn 2s ease-in-out",
      padding: "5px 10px", // Added padding for better clickability
    },
    profileIcon: {
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
      cursor: "pointer",
    },
    profileImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>ASPIRANTS LABYRINTH</h1>
      <nav style={styles.nav}>
        <a style={styles.navLink} href="/">Home</a>
        <a style={styles.navLink} href="/dashboard">Dashboard</a>
        <a style={styles.navLink} href="/resources">Resources</a>
        <a style={styles.navLink} href="/tools">Tools</a>
        {/* Example of a profile icon */}
        <div style={styles.profileIcon}>
          <img 
            src="profile-pic-url" // Replace with your profile image URL
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
