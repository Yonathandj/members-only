function isAuthenticated(req, res, next) {
    if (req.isAuthenticated() && req.user._id === req.body.userId) {
        next()
    } else {
        return res.status(401).json({
            message: 'User is not authenticate. Please login first'
        })
    }
}

function isAdmin(req, res, next) {
    if (req.user.isAdmin) {
        next()
    } else {
        return res.status(401).json({
            message: 'Authorization blocked. User is not an admin!'
        })
    }
}

module.exports = { isAuthenticated, isAdmin }