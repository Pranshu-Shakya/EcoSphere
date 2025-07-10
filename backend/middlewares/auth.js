import jwt from "jsonwebtoken"

const authUser = async (req, res, next) => {

    const { token } = req.headers;

    if( !token ) {
        return res.status(401).json({ success: false, message: "Unauthorized access Login again" });
    }

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: error.message });
    }

}

export default authUser;