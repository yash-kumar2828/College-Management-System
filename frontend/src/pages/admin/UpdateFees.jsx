import { useState } from "react";
import axios from "axios";
import styles from "../Dashboards.module.css";
import OtherHeader from "../../components/ExtraComponent/OtherHeader";
import toast from 'react-hot-toast';

const UpdateFees = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [status, setStatus] = useState("Pending");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!rollNumber) {
      toast.error("Please enter Roll Number")
      return;
    }

    try {
      const res = await axios.post("https://college-management-system-cpo2.onrender.com/admin/fees",
        { rollNumber, status},
        { withCredentials: true }
      );
      toast.success("Fee detail Updated")
      setRollNumber("");
      setStatus("Pending");
    } catch (error) {
      console.error(error);
      toast.error("Error updating fees");
    }
  };

  return (
    <>
      <OtherHeader heading="Update Fees" firstLink="Dashboard" firstPath="/admin/dashboard" secondLink="Update Fees"/>

      <section className={styles.dashboardSection}>
        <div className="container py-4">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">Update Student Fees</h5>
            <div className="mb-3">
              <label className="form-label">Roll Number</label>
              <input type="text" className="form-control" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <div className="text-end">
              <button className="btn btn-success" onClick={handleSubmit}> Update Fees</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateFees;
