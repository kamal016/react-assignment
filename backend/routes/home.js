const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../database.js");

router.post("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name,id FROM users WHERE id = $1",
      [req.user.id] 
    ); 
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post('/post', async (req, res)=>{
  try{
      const timestamp = Date.now()
      var datetime = new Date();
      let query_str = `INSERT INTO post (userid ,post,timestamp, datetime) VALUES ('${req.body.id}', '${req.body.post.replace("'","")}','${timestamp}', '${datetime}')  RETURNING *`
      pool.query(query_str,(err, result)=>{
          if(err){
            res.status(400).send("not posted")
            console.log(err.stack);
          }
          res.status(200).send("posted")
        })
  }catch(e){
    console.log(e);
  }
})

module.exports = router;