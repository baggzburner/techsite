require('dotenv').config()

const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = process.env.PORT;

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ensure JSON data is parsed properly

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Default route to open index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
  });

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
  });

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
  });

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;



  if (!name || !email || !message) {
    console.error('Missing form fields!');
    return res.status(400).send('All fields are required!');
  }

  const sql = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('An error occurred while saving data.');
    }
    console.log('Data successfully inserted:', result);
    res.redirect('/contact')
  });
});

// Check if server is running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
