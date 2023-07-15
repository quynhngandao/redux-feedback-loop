const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET feedbacks
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback" ORDER BY id;')
    .then((result) => {
      console.log("DB query successful");
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error DB query in GET /feedback", err);
      res.sendStatus(500);
    });
});

// POST feedbacks
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
    .then((result) => {
      console.log("Added input to DB", result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error adding input to DB", err);
      res.sendStatus(500);
    });
});

module.exports = router;
