import axios from "axios";

export const fetchEmployees = async () => {
  const response = await axios.post(
    "/api/backend_dev/gettabledata.php",
    {
      username: "test",
      password: "123456",
    }
  );

  return response.data.TABLE_DATA.data.map((row, index) => ({
    id: index,
    name: row[0],
    position: row[1],
    city: row[2],
    employeeId: row[3],
    startDate: row[4],
    salaryRaw: row[5],
    salary: Number(row[5].replace(/[$,]/g, "")),
  }));
};