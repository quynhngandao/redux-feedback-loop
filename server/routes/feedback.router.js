const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET feedback
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback" ORDER BY id;')
    .then((res) => {
      console.log("DB query successful");
      res.send(res.rows);
    })
    .catch((err) => {
      console.log("Error DB query in GET /feedback", err);
      res.sendStatus(500);
    });
});

// POST feedback
router.post("/", (req, res) => {
  const feeling = req.body.feeling;
  const understanding = req.body.understanding;
  const support = req.body.support;
  const comments = req.body.comments;

  pool
    .query(
      `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`,
      [feeling, understanding, support, comments]
    )
    .then((res) => {
      console.log("Added input to DB", res);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error adding input to DB", err);
      res.sendStatus(500);
    });
});

module.exports = router;
