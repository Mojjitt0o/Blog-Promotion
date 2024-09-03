module.exports = (shouldAdmin) => (req, res, next) => {
    console.log('req.user:', req.user);
    
    if (req.user.is_admin == shouldAdmin) {
        return next()
    }
    
    return res.sendStatus(403)
};