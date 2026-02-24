import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Details.module.css";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state;

  if (!employee) {
    return <h3 className={styles.noData}>No employee data</h3>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        
        {/* Back Button */}
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2 className={styles.title}>Employee Details</h2>

        <div className={styles.info}>
          <div className={styles.row}>
            <span>Name</span>
            <p>{employee.name}</p>
          </div>

          <div className={styles.row}>
            <span>Position</span>
            <p>{employee.position}</p>
          </div>

          <div className={styles.row}>
            <span>City</span>
            <p>{employee.city}</p>
          </div>

          <div className={styles.row}>
            <span>Employee ID</span>
            <p>{employee.employeeId}</p>
          </div>

          <div className={styles.row}>
            <span>Start Date</span>
            <p>{employee.startDate}</p>
          </div>

          <div className={styles.row}>
            <span>Salary</span>
            <p>{employee.salaryRaw}</p>
          </div>
        </div>

        <button
          className={styles.button}
          onClick={() => navigate("/photo")}
        >
          Capture Photo
        </button>

      </div>
    </div>
  );
}

export default Details;