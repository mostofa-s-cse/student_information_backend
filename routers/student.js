const express = require('express');
const { createdStudent, getAllStudent, removeStudent, getOneStudent, updateOneStudent } = require('../controllers/student');
const router = express.Router();

router
.post('/student',createdStudent)
.get('/students',getAllStudent)
.get('/student/:id',getOneStudent)
.patch('/student/:id',updateOneStudent)
    .delete('/student/:id',removeStudent)

        module.exports = router;