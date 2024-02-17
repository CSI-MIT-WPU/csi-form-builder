
const validateResponse = (req, res, next) => {
    console.log("asdasd");
    console.log(req.body.content)
    next();
}

module.exports = validateResponse;