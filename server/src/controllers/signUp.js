function handleSignUp(req, res) {
    console.log(req.body);
    res.status(200).json('sukses bor');
}

module.exports = handleSignUp;