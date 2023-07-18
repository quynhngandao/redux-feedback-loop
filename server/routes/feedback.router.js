const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET feedbacks
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback" ORDER BY id;')
    .then((result) => {
      console.log("Success GET from DB");
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error GET from DB ", err);
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
      console.log("Success POST to DB", result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error POST to DB", err);
      res.sendStatus(500);
    });
});

// DELETE feedback
router.delete("/:id", (req, res) => {
  pool
    .query(`DELETE FROM "feedback" WHERE id=$1`, [req.params.id])
    .then((result) => {
      console.log('Success DELETE from DB')
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error DELETE from DB ", err);
      res.sendStatus(500);
    });
});

module.exports = router;

