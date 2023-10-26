function handleLoginAuthentication(req, res, next) {
    try {
        return res.status(200).json({
            user: {
                userId: req.user._id,
                isAdmin: req.user.isAdmin
            }
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { handleLoginAuthentication }