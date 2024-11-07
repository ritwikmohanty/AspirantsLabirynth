import React, { useState } from 'react';

const ProgressPage = () => {
  const [progress, setProgress] = useState(50); // Example progress value

  // Function to get motivational quote based on progress
  const getQuote = (progress) => {
    if (progress <= 25) {
      return "Every small step counts. Keep going!";
    } else if (progress <= 50) {
      return "You're halfway there. Believe in yourself!";
    } else if (progress <= 75) {
      return "Success is near. Stay focused!";
    } else if (progress < 100) {
      return "You're almost at the finish line. Finish strong!";
    } else {
      return "Amazing work! You've completed it!";
    }
  };

  // Inline styles with larger elements
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    progressBarContainer: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    progress: {
      width: '90%',
      height: '30px',  // Larger height for the progress bar
    },
    quoteContainer: {
      marginBottom: '40px',
      textAlign: 'center',
    },
    tablesContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '90%',
    },
    table: {
      width: '45%',
      borderCollapse: 'collapse',
    },
    tableCell: {
      padding: '15px',  // Increased padding for better readability
      border: '2px solid white',  // Thicker border for better visibility
      textAlign: 'center',  // Center-align table content
      fontSize: '18px',  // Increased font size
    },
    heading: {
      marginBottom: '15px',
      fontSize: '24px',  // Larger heading text
    },
    quoteText: {
      fontSize: '28px',  // Bigger font for the motivational quote
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      {/* Progress bar */}
      <div style={styles.progressBarContainer}>
        <progress value={progress} max="100" style={styles.progress}></progress>
        <span style={{ fontSize: '22px' }}>{progress}% Complete</span>
      </div>

      {/* Motivational Quote */}
      <div style={styles.quoteContainer}>
        <h2 style={styles.quoteText}>{getQuote(progress)}</h2>
      </div>

      {/* Stats Tables */}
      <div style={styles.tablesContainer}>
        <div>
          <h3 style={styles.heading}>Health Stats</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableCell}>Metric</th>
                <th style={styles.tableCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>Calories Burned</td>
                <td style={styles.tableCell}>500</td> {/* Updated for a larger impact */}
              </tr>
              <tr>
                <td style={styles.tableCell}>Exercise Time</td>
                <td style={styles.tableCell}>1.5 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 style={styles.heading}>Course Stats</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableCell}>Metric</th>
                <th style={styles.tableCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>Chapters Completed</td>
                <td style={styles.tableCell}>7/10</td> {/* Updated for example */}
              </tr>
              <tr>
                <td style={styles.tableCell}>Exercises Completed</td>
                <td style={styles.tableCell}>28/40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;