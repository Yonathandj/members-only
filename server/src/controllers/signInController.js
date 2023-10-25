function handleLoginAuthentication(req, res, next) {
    try {
        res.status(200).json({ user: req.user._id })
    } catch (error) {
        next(error);
    }
}

module.exports = { handleLoginAuthentication }