import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import { useNavigate } from "react-router-dom";
import styles from "./List.module.css";

function List() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        alert("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Employee List</h1>

        <div className={styles.buttonGroup}>
          <button
            className={styles.navButton}
            onClick={() => navigate("/chart")}
          >
            Bar Chart
          </button>

          <button
            className={styles.navButton}
            onClick={() => navigate("/map")}
          >
            Map
          </button>
        </div>

        {/* Scrollable Table Section */}
        <div className={styles.tableSection}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>City</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.position}</td>
                  <td>{emp.city}</td>
                  <td>{emp.salaryRaw}</td>
                  <td>
                    <button
                      className={styles.viewButton}
                      onClick={() =>
                        navigate(`/details/${emp.id}`, { state: emp })
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default List;