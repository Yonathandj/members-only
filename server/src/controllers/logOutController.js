function handleLogOut(req, res, next) {
    try {
        req.logout();
        return res.status(200).json({
            message: 'LogOut success'
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { handleLogOut };