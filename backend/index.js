"use strict";

require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Profile page Info Card.
app.get("/profile", (req, res) => {
  pool.query(
    "SELECT student.student_id, teacher.teacher_id, teacher.name AS teacherName, student.name, student.school,student.email, student.profile_pic,student.date_of_birth,student.course, student.contact_number FROM student INNER JOIN teacher on student.teacher_id = teacher.teacher_id;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// Project page
app.get("/project", (req, res) => {
  pool.query("SELECT * FROM project", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// sorting projects by Beginner
app.get("/sortBeginner", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE course = 'beginner'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// sorting projects by Intermediate
app.get("/sortIntermediate", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE course = 'intermediate'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

//   sorting projects by Advance
app.get("/sortAdvance", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE course = 'advance'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
// Sorting by Free
app.get("/sortFree", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE subscription = 'Free'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// sorting by Premium
app.get("/sortPremium", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE subscription = 'Premium'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Connected! Listening at http://localhost:${PORT}`);
  }
});
