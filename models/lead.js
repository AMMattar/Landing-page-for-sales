var express = require("express")
var mysql = require('mysql');
var app1 = express(); 
var router = express.Router();
var connecting = mysql.createConnection({
// proporties 
  hos: 'localhost',
  user: 'root',
  password: null,
  database: 'sample'
});

connecting.connect((error) => {
  if(error) {
    console.log('Error');
  } else {
    console.log("Connected");
  }
} );

/* GET users listing. */
router.get('/', (req, res) => {
    connecting.query("SELECT * FROM `sampletable` WHERE 1", (error, rows, fields) => {
        if(error) {
            console.log('Error i n the query');
        } else {
            console.log(rows, fields);
            res.send('Hello world, ' + rows[0].ID)
        }});
    
    
});
module.exports = router;


