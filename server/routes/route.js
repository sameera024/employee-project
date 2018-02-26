const router = require("express").Router();
const con = require("../model/model");

router.get('/admin', (req, res) => {
    con.query('select * from admin', (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results);
        // dis is json data do not parse it at da front end
        res.send(results);
    })
});
module.exports = router;