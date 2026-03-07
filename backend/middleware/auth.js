import jwt from "jsonwebtoken";

export const authStudent = (req, res, next) => {
  try {
    const token = req.cookies.token;   
    
    console.log("Cookies:", req.cookies);

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, "yashSecretKey");

    req.studentId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};




export const authFaculty = (req, res, next) => {
  try {
    const token = req.cookies.token;   
    
    console.log("Cookies:", req.cookies);

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, "yashSecretKey");

    req.facultyId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};