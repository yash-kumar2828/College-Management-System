import jwt from "jsonwebtoken";

export const authStudent = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.studentId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export const authFaculty = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.facultyId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};