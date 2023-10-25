function handleLoginAuthentication(req, res, next) {
    try {
        res.status(200).json({
            user: {
                id: req.user._id,
                isAdmin: req.user.isAdmin
            }
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { handleLoginAuthentication }