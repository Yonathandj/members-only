function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    }
    res.status(401).json({
        message: 'User is not authenticate. Please login first'
    })
}

function isAdmin(req, res, next) {
    if (req.user.isAdmin) {
        next()
    }
    res.status(401).json({
        message: 'Authorization blocked. User is not an admin!'
    })
}

module.exports = { isAuthenticated, isAdmin }