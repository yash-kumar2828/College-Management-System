import { useEffect, useState } from "react";
import { MdLabelImportant } from "react-icons/md";
import styles from "../Dashboards.module.css";
import axios from "axios";

const StudentNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotice=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/notice/latest");
        setNotices(res.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchNotice();
  }, []);

  return (
    <>
      <div className={`card mb-4 shadow-sm ${styles.noticeCard}`}>
        <div className="card-header fw-bold">
          <MdLabelImportant /> Important Notices
        </div>

        <div className="card-body">
          <ul className="list-unstyled mb-0">
            {notices.map((notice, index) => (
              <li key={index} className="mb-2">
                <strong>{notice.title}:</strong> {notice.message} (
                <em>
                  {new Date(notice.date).toLocaleDateString()}
                </em>)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentNotice;