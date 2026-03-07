import Counter from "../model/counter.model.js";

export const generateFacultyId = async () => {
  const counter = await Counter.findOneAndUpdate(
    { id: "enrollment_seq" },
    { $inc: { seq: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const serial = counter.seq.toString().padStart(4, "0");
  return `CMSFAC${serial}`;
};


export const generatePassword = () => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  for (let i = 0; i < 6; i++) {
    password += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return password;
};

