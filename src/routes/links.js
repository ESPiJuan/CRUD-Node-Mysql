const express = require('express');
const router = express.Router()
const mysqlConnection = require('../../db/database')
router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM bot_links', (err, rows, fields) => {
        if (!err) {
            res.status("200").json(rows);
        } else {
            res.status("404").send("ERROR Select")
        }
    })
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`SELECT * FROM bot_links WHERE id = "${id}" `, (err, rows, fields) => {
        if (!err) {
            res.status("200").json(rows[0]);
        } else {
            res.status("404").send("ERROR Select")
        }
    })
});
router.post('/', (req, res) => {
    const id = req.body.id;
    const url = req.body.url;

    mysqlConnection.query(`INSERT INTO bot_links (id, url) VALUES ("${id}","${url}")`, (err) => {
        if (!err) {
            res.status("200").send("Creado link");
        }else{
            res.status("404").send("ERROR Inset")
        }
    })
});
router.put('/:id', (req, res) => {
    const id = req.params.id
    const url = req.body.url;

    mysqlConnection.query(`UPDATE bot_links SET url = "${url}" WHERE id = "${id}"`, (err) => {
        if (!err) {
            res.status("200").send("Update link");
        }else{
            res.status("404").send("ERROR Update")
        }
    })
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM bot_links WHERE id = "${id}" `, (err, rows, fields) => {
        if (!err) {
            res.status("200").send("Delete link");
        } else {
            res.status("404").send("ERROR Delete")
        }
    })
});
module.exports = router;
