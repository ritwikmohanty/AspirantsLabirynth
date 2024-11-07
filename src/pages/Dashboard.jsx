import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Calendar, Clock, GraduationCap, List, Star } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const styles = {
  container: {
    maxWidth: '1900px',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: '#1a202c',
    color: '#e2e8f0',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#f7fafc',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    backgroundColor: '#2d3748',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '1.25rem',
    borderBottom: '1px solid #4a5568',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#f7fafc',
  },
  cardContent: {
    padding: '1.25rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '1rem',
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    borderBottom: '1px solid #4a5568',
    color: '#a0aec0',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #4a5568',
    color: '#e2e8f0',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
  },
  subList: {
    listStyleType: 'circle',
    paddingLeft: '1.5rem',
  },
  importantDatesList: {
    listStyleType: 'none',
    padding: 0,
  },
  importantDatesItem: {
    marginBottom: '0.75rem',
    fontSize: '1rem',
    color: '#e2e8f0',
  },
  importantDatesDate: {
    fontWeight: 'bold',
    color: '#a0aec0',
  },
  icon: {
    height: '1.75rem',
    width: '1.75rem',
    color: '#a0aec0',
  },
  chartContainer: {
    height: '350px',
    width: '100%',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#38b2ac',
    borderRadius: '0.5rem',
    color: '#f7fafc',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  button1: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#38b2ac',
    borderRadius: '0.5rem',
    color: '#f7fafc',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft:'1rem'
  },
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

const testScoresData = [
  { name: 'Mock Test 1', Physics: 85, Chemistry: 92, Mathematics: 105 },
  { name: 'Mock Test 2', Physics: 90, Chemistry: 88, Mathematics: 110 },
  { name: 'Mock Test 3', Physics: 95, Chemistry: 98, Mathematics: 112 },
];

const subjectPerformanceData = [
  { subject: 'Physics', score: 95 },
  { subject: 'Chemistry', score: 98 },
  { subject: 'Mathematics', score: 112 },
];

export default function JEEDashboard() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHealthButtonClick = () => {
    navigate('/health'); // Navigate to /health
  };
  const handleProgressButtonClick = () => {
    navigate('/pro'); // Navigate to /health
  };

  return (<>
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
    <div style={styles.container}>
      <h1 style={styles.heading}>JEE Student Dashboard</h1>

      <span>
        <button style={styles.button} onClick={handleHealthButtonClick}>Check your Health</button>
      </span>
      <span>
        <button style={styles.button1} onClick={handleProgressButtonClick}>Check your progress</button>
      </span>
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <List style={styles.icon} />
              Course Outline and Syllabus
            </h2>
          </div>
          <div style={styles.cardContent}>
            <ul style={styles.list}>
              <li>Physics
                <ul style={styles.subList}>
                  <li>Mechanics</li>
                  <li>Thermodynamics</li>
                  <li>Electromagnetism</li>
                </ul>
              </li>
              <li>Chemistry
                <ul style={styles.subList}>
                  <li>Organic Chemistry</li>
                  <li>Inorganic Chemistry</li>
                  <li>Physical Chemistry</li>
                </ul>
              </li>
              <li>Mathematics
                <ul style={styles.subList}>
                  <li>Algebra</li>
                  <li>Calculus</li>
                  <li>Geometry and Trigonometry</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Clock style={styles.icon} />
              Timetable
            </h2>
          </div>
          <div style={styles.cardContent}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Day</th>
                  <th style={styles.th}>9 AM - 11 AM</th>
                  <th style={styles.th}>1 PM - 3 PM</th>
                  <th style={styles.th}>4 PM - 6 PM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Monday</td>
                  <td style={styles.td}>Physics</td>
                  <td style={styles.td}>Chemistry</td>
                  <td style={styles.td}>Mathematics</td>
                </tr>
                <tr>
                  <td style={styles.td}>Tuesday</td>
                  <td style={styles.td}>Mathematics</td>
                  <td style={styles.td}>Physics</td>
                  <td style={styles.td}>Chemistry</td>
                </tr>
                <tr>
                  <td style={styles.td}>Wednesday</td>
                  <td style={styles.td}>Chemistry</td>
                  <td style={styles.td}>Mathematics</td>
                  <td style={styles.td}>Physics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Calendar style={styles.icon} />
              Important Dates
            </h2>
          </div>
          <div style={styles.cardContent}>
            <ul style={styles.importantDatesList}>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>May 15, 2024:</span> JEE Main Application Deadline
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>June 1-10, 2024:</span> JEE Main Exam (Session 1)
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>July 15-25, 2024:</span> JEE Main Exam (Session 2)
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>August 20, 2024:</span> JEE Advanced Registration Deadline
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>September 5, 2024:</span> JEE Advanced Exam
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <GraduationCap style={styles.icon} />
              Exam Dates
            </h2>
          </div>
          <div style={styles.cardContent}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Exam</th>
                  <th style={styles.th}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Physics Mock Test</td>
                  <td style={styles.td}>May 20, 2024</td>
                </tr>
                <tr>
                  <td style={styles.td}>Chemistry Mock Test</td>
                  <td style={styles.td}>May 27, 2024</td>
                </tr>
                <tr>
                  <td style={styles.td}>Mathematics Mock Test</td>
                  <td style={styles.td}>June 3, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Star style={styles.icon} />
              Test Scores
            </h2>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={testScoresData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#a0aec0" />
                  <YAxis stroke="#a0aec0" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Physics" stroke="#3182ce" />
                  <Line type="monotone" dataKey="Chemistry" stroke="#38a169" />
                  <Line type="monotone" dataKey="Mathematics" stroke="#e53e3e" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div style={{...styles.card, gridColumn: '1 / -1'}}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Star style={styles.icon} />
              Subject Performance
            </h2>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" stroke="#a0aec0" />
                  <YAxis stroke="#a0aec0" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#4299e1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
