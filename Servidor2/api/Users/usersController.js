const express = require("express");
const router = express.Router();
const usersHandler = require("./usersHandler");

router.get('/', (req, res) => {
    usersHandler.returnUsers().then((response) => res.json(response));
})

router.post('/', (req, res) => {
    usersHandler.createUser(req.body).then((response) => res.json(response));
})

router.post('/login', (req, res) => {
    usersHandler.login(req.body).then((response) => res.send(response));
})

module.exports = router;