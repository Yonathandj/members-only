function handleLogOut(req, res, next) {
    try {
        req.logout((err) => {
            if (err) throw new Error('Error occured when logout. Please try again!');
        });
        return res.status(200).json({
            message: 'Logout success'
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { handleLogOut };