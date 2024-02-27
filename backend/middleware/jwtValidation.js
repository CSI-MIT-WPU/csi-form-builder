const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        if (!token) {
            return res.status(401).json({message:"Unauthorized."});
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if (err) {
                return res.status(403).json({ message: 'Failed to authenticate token' });
            }
            req.user = decoded;
            next();
        })
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = validateToken;