const express = require('express');
const router = express.Router();

const { handleAddNewRoom, handleGetAllRooms, handlePutRoom, handleDeleteRoom } = require('../controllers/roomController');
const { isAuthenticated, isAdmin } = require('../auth/authCheck');

router.route('/')
    .post(isAuthenticated, isAdmin, handleAddNewRoom)
    .get(isAuthenticated, handleGetAllRooms)

router.put("/:roomId", isAuthenticated, isAdmin, handlePutRoom)
router.delete('/:roomId', isAuthenticated, isAdmin, handleDeleteRoom)
module.exports = router