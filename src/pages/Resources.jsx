import React, { useState } from 'react'
import { FileQuestion, FileText, Book, Video, HelpCircle, X } from 'lucide-react'

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    animation: "slideIn 1.5s ease-in-out",
    backgroundColor: '#282c34',
    color: 'white',
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
    color: "white",
    textDecoration: "none",
    fontSize: "26px",
    animation: "slideIn 2s ease-in-out",
    padding: "5px 10px",
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

const resources = [
  {
    name: 'Mock Tests',
    icon: FileQuestion,
    color: '#ff6b6b',
    links: {
      Physics: 'https://www.selfstudys.com/mcq/jee/online/mock-test/physics',
      Chemistry: 'https://www.selfstudys.com/mcq/jee/online/mock-test/chemistry',
      Maths: 'https://www.selfstudys.com/mcq/jee/online/mock-test/mathematics',
    },
  },
  {
    name: 'PYQs',
    icon: FileText,
    color: '#4ecdc4',
    links: {
      Physics: 'https://www.selfstudys.com/books/jee-previous-year-paper/english/chapter-wise/physics-chapter-wise-pyp/7038',
      Chemistry: 'https://www.selfstudys.com/books/jee-previous-year-paper/english/chapter-wise/chemistry-chapter-wise-pyp/7039',
      Maths: 'https://www.selfstudys.com/books/jee-previous-year-paper/english/chapter-wise/mathematics-chapter-wise-pyp/7037',
    },
  },
  {
    name: 'Notes',
    icon: Book,
    color: '#45b7d1',
    links: {
      Physics: 'https://www.vedantu.com/jee-main/physics-revision-notes ',
      Chemistry: 'https://www.vedantu.com/jee-main/chemistry-revision-notes',
      Maths: 'https://www.vedantu.com/jee-main/maths-revision-notes',
    },
  },
  {
    name: 'Lectures',
    icon: Video,
    color: '#f7b731',
    links: {
      Physics: 'https://www.youtube.com/playlist?list=PLbu_fGT0MPsuUzCT6BZvto0hkcA3dEigi',
      Chemistry: 'https://www.youtube.com/playlist?list=PLYFlGICvnvLgtUsAXwDlIa1aRS2agfNT3',
      Maths: 'https://www.youtube.com/playlist?list=PL_A4M5IAkMad5zB0Dh6gUw1eYK8dN7hP7',
    },
  },
]

const subjects = ['Physics', 'Chemistry', 'Maths']

export default function Component() {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index)
  }

  const handleSubjectClick = (subject) => {
    const link = resources[selectedCard].links[subject]
    window.location.href = link
  }

  return (
    <>
      <header style={styles.header}>
        <h1 style={styles.logo}>ASPIRANTS LABYRINTH</h1>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="/">Home</a>
          <a style={styles.navLink} href="/dashboard">Dashboard</a>
          <a style={styles.navLink} href="/resources">Resources</a>
          <a style={styles.navLink} href="/tools">Tools</a>
          <div style={styles.profileIcon}>
            <img 
              src="profile-pic-url"
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
        </nav>
      </header>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          Student Resources
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          width: '100%',
          maxWidth: '1300px',
          position: 'relative',
          zIndex: 1,
        }}>
          {resources.map((resource, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                padding: '40px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                opacity: selectedCard !== null && selectedCard !== index ? 0.6 : 1,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div
                style={{
                  backgroundColor: resource.color,
                  borderRadius: '50%',
                  padding: '30px',
                  marginBottom: '30px'
                }}
              >
                <resource.icon size={80} color="#fff" />
              </div>
              <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px', textAlign: 'center' }}>
                {resource.name}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', marginBottom: '20px' }}>
                Access your {resource.name.toLowerCase()} here
              </p>
            </div>
          ))}
        </div>

        {selectedCard !== null && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '50px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 100,
              maxWidth: '90%',
              width: '700px',
              animation: 'popIn 0.3s ease',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedCard(null)}
            >
              <X size={32} color="#333" />
            </button>
            <div
              style={{
                backgroundColor: resources[selectedCard].color,
                borderRadius: '50%',
                padding: '40px',
                marginBottom: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* <resources[selectedCard].icon size={100} color="#fff" /> */}
            </div>
            <h2 style={{ fontSize: '3rem', color: '#333', marginBottom: '30px', textAlign: 'center' }}>
              {resources[selectedCard].name}
            </h2>
            <p style={{ fontSize: '1.5rem', color: '#666', textAlign: 'center', marginBottom: '40px' }}>
              Access your {resources[selectedCard].name.toLowerCase()} here
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
              {subjects.map((subject, subIndex) => (
                <button
                  key={subIndex}
                  style={{
                    backgroundColor: resources[selectedCard].color,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '15px 30px',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                  onClick={() => handleSubjectClick(subject)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#333'
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = resources[selectedCard].color
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          style={{
            backgroundColor: '#4a4a4a',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            padding: '20px 40px',
            fontSize: '1.3rem',
            cursor: 'pointer',
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            zIndex: 1,
          }}
          onClick={() => window.location.href = 'https://huggingface.co/spaces/KingNish/OpenGPT-4o'}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4a4a4a'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <HelpCircle size={28} style={{ marginRight: '15px' }} />
          Ask Your Doubts
        </button>

        {selectedCard !== null && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
              zIndex: 50,
              animation: 'fadeIn 0.3s ease',
            }}
            onClick={() => setSelectedCard(null)}
          />
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes popIn {
            from { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </>
  )
}