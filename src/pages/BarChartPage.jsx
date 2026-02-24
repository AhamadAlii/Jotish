import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styles from "./BarChartPage.module.css";

function BarChartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const employees = await fetchEmployees();
      const firstTen = employees.slice(0, 10);

      setData(
        firstTen.map((emp) => ({
          name: emp.name,
          salary: emp.salary,
        }))
      );
    };

    load();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        <h2 className={styles.title}>
          Salary of First 10 Employees
        </h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis
              dataKey="name"
              stroke="white"
              tick={{ fill: "white", fontSize: 12 }}
            />
            <YAxis
              stroke="white"
              tick={{ fill: "white" }}
            />
            <Tooltip
              contentStyle={{
                background: "#2b1055",
                border: "1px solid gold",
                borderRadius: "10px",
                color: "white"
              }}
            />
            <Bar
              dataKey="salary"
              fill="gold"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartPage;