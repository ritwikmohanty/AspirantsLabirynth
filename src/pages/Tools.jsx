"use client"

import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts'

export default function Tools() {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [mode, setMode] = useState('pomodoro')
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [statistics, setStatistics] = useState({ pomodoro: 0, shortBreak: 0, longBreak: 0 })
  const [deadlines, setDeadlines] = useState([])
  const [newDeadline, setNewDeadline] = useState({ task: '', date: '' })
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [timerSettings, setTimerSettings] = useState({
    pomodoro: { duration: 25, unit: 'minutes', label: 'Pomodoro' },
    shortBreak: { duration: 5, unit: 'minutes', label: 'Short Break' },
    longBreak: { duration: 15, unit: 'minutes', label: 'Long Break' },
  })
  const [editingMode, setEditingMode] = useState(null)

  useEffect(() => {
    let interval = null
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1)
        updateStatistics()
      }, 1000)
    } else if (time === 0) {
      playAlarm()
      handleModeChange('pomodoro')
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    const storedStats = JSON.parse(localStorage.getItem('statistics')) || { pomodoro: 0, shortBreak: 0, longBreak: 0 }
    const storedDeadlines = JSON.parse(localStorage.getItem('deadlines')) || []
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false
    const storedTimerSettings = JSON.parse(localStorage.getItem('timerSettings')) || timerSettings
    setTasks(storedTasks)
    setStatistics(storedStats)
    setDeadlines(storedDeadlines)
    setIsDarkMode(storedDarkMode)
    setTimerSettings(storedTimerSettings)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('statistics', JSON.stringify(statistics))
    localStorage.setItem('deadlines', JSON.stringify(deadlines))
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    localStorage.setItem('timerSettings', JSON.stringify(timerSettings))
  }, [tasks, statistics, deadlines, isDarkMode, timerSettings])

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs > 0 ? hrs.toString().padStart(2, '0') + ':' : ''}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStart = () => {
    setIsActive(true)
  }

  const handlePause = () => {
    setIsActive(false)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(convertToSeconds(timerSettings[mode].duration, timerSettings[mode].unit))
  }

  const handleModeChange = (newMode) => {
    setIsActive(false)
    setMode(newMode)
    setTime(convertToSeconds(timerSettings[newMode].duration, timerSettings[newMode].unit))
  }

  const updateStatistics = () => {
    setStatistics(prevStats => ({
      ...prevStats,
      [mode]: prevStats[mode] + 1
    }))
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  const addDeadline = () => {
    if (newDeadline.task && newDeadline.date) {
      setDeadlines([...deadlines, newDeadline])
      setNewDeadline({ task: '', date: '' })
    }
  }

  const playAlarm = () => {
    alert('Timer finished!')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const convertToSeconds = (duration, unit) => {
    switch (unit) {
      case 'hours':
        return duration * 3600
      case 'minutes':
        return duration * 60
      case 'seconds':
        return duration
      default:
        return duration * 60
    }
  }

  const handleSettingsChange = (mode, field, value) => {
    setTimerSettings(prevSettings => ({
      ...prevSettings,
      [mode]: {
        ...prevSettings[mode],
        [field]: value
      }
    }))
    if (field === 'duration' || field === 'unit') {
      setTime(convertToSeconds(
        field === 'duration' ? value : timerSettings[mode].duration,
        field === 'unit' ? value : timerSettings[mode].unit
      ))
    }
  }

  const chartData = Object.entries(statistics).map(([name, value]) => ({ name, value }))

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  const gradientStyle = isDarkMode
    ? { background: 'linear-gradient(to right, #2c3e50, #4c4c4c)' }
    : { background: 'linear-gradient(to right, #e0eafc, #cfdef3)' }

  return (
    <>
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
    <div style={{
      ...styles.container,
      ...gradientStyle,
      color: isDarkMode ? '#ffffff' : '#333333',
    }}>
      
      <h1 style={styles.title}>Pomodoro Timer</h1>
      <div style={styles.darkModeToggle}>
        <input
          type="checkbox"
          id="darkmode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkmode-toggle" style={styles.darkModeLabel}>
          <svg style={styles.sunIcon} viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2m-4.3-5.7l1.4-1.4M4.9 19.1l1.4-1.4m0-11.3L4.9 4.9m14.2 14.2l-1.4-1.4"/></svg>
          <svg style={styles.moonIcon} viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>
        </label>
      </div>
      <div style={styles.timer}>
        <h2 style={styles.timerDisplay}>{formatTime(time)}</h2>
        <p style={styles.modeDisplay}>Current mode: {timerSettings[mode].label}</p>
        <div style={styles.buttonGroup}>
          <button onClick={handleStart} style={{...styles.button, backgroundColor: isDarkMode ? '#4CAF50' : '#2196F3'}}>Start</button>
          <button onClick={handlePause} style={{...styles.button, backgroundColor: isDarkMode ? '#f44336' : '#FF9800'}}>Pause</button>
          <button onClick={handleReset} style={{...styles.button, backgroundColor: isDarkMode ? '#9C27B0' : '#E91E63'}}>Reset</button>
        </div>
        <div style={styles.modeButtons}>
          {Object.keys(timerSettings).map((timerMode) => (
            <button
              key={timerMode}
              onClick={() => handleModeChange(timerMode)}
              style={{
                ...styles.button,
                backgroundColor: mode === timerMode ? (isDarkMode ? '#FF5722' : '#673AB7') : (isDarkMode ? '#555' : '#ddd'),
              }}
            >
              {timerSettings[timerMode].label}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.settings}>
        <h3>Timer Settings</h3>
        {Object.keys(timerSettings).map((timerMode) => (
          <div key={timerMode} style={styles.settingsSection}>
            <h4>{timerSettings[timerMode].label} Settings</h4>
            <label style={styles.label}>Duration:</label>
            <input
              type="number"
              value={timerSettings[timerMode].duration}
              onChange={(e) => handleSettingsChange(timerMode, 'duration', parseInt(e.target.value))}
              style={styles.input}
            />
            <label style={styles.label}>Unit:</label>
            <select
              value={timerSettings[timerMode].unit}
              onChange={(e) => handleSettingsChange(timerMode, 'unit', e.target.value)}
              style={styles.input}
            >
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="seconds">Seconds</option>
            </select>
          </div>
        ))}
      </div>

      <div style={styles.tasks}>
        <h3>Tasks</h3>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
          placeholder="New task"
        />
        <button onClick={addTask} style={styles.button}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={styles.taskItem}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.deadlines}>
        <h3>Deadlines</h3>
        <input
          type="text"
          value={newDeadline.task}
          onChange={(e) => setNewDeadline({ ...newDeadline, task: e.target.value })}
          style={styles.input}
          placeholder="Task"
        />
        <input
          type="date"
          value={newDeadline.date}
          onChange={(e) => setNewDeadline({ ...newDeadline, date: e.target.value })}
          style={styles.input}
        />
        <button onClick={addDeadline} style={styles.button}>Add Deadline</button>
        <ul>
          {deadlines.map((deadline, index) => (
            <li key={index} style={styles.deadlineItem}>
              {deadline.task} - {deadline.date}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.statistics}>
        <h3>Statistics</h3>
        <div style={styles.charts}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </>
  )
}

const styles = {
  container: {
    padding: '100px',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
  },
  timer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  timerDisplay: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  modeDisplay: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '0 5px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  modeButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  settings: {
    marginBottom: '20px',
  },
  settingsSection: {
    marginBottom: '10px',
  },
  label: {
    marginRight: '10px',
  },
  input: {
    padding: '5px',
    marginRight: '10px',
  },
  tasks: {
    marginBottom: '20px',
  },
  taskItem: {
    marginBottom: '10px',
  },
  deadlines: {
    marginBottom: '20px',
  },
  deadlineItem: {
    marginBottom: '10px',
  },
  statistics: {
    marginBottom: '20px',
  },
  charts: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  darkModeToggle: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  darkModeLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  sunIcon: {
    width: '24px',
    height: '24px',
    fill: '#FFD700',
  },
  moonIcon: {
    width: '24px',
    height: '24px',
    fill: '#B0C4DE',
    display: 'none',
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
}
