const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../database.js");

router.post("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name FROM users WHERE id = $1",
      [req.user.id] 
    ); 
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;