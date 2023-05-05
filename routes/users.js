/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 */
const express = require('express');
const router = express.Router();

let users = ['user 1', 'user 2', 'user 3'];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const { name } = req.body;
    const user = { id: nextId, name };
    users.push(user);
    nextId++;
    res.status(201).json(user);
});

module.exports = router;
