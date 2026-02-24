import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEmployees } from "../services/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapPage.module.css";

function MapPage() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const cityCoords = {
    Edinburgh: [55.9533, -3.1883],
    Tokyo: [35.6762, 139.6503],
    "San Francisco": [37.7749, -122.4194],
    "New York": [40.7128, -74.006],
    London: [51.5072, -0.1276],
    Sidney: [-33.8688, 151.2093],
    Singapore: [1.3521, 103.8198],
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    load();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2 className={styles.title}>Employees by City</h2>

        <div className={styles.mapWrapper}>
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={true}
            className={styles.map}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {employees.map((emp, index) => {
              const coords = cityCoords[emp.city];
              if (!coords) return null;

              return (
                <Marker key={index} position={coords}>
                  <Popup>
                    <div className={styles.popup}>
                      <strong>{emp.name}</strong>
                      <br />
                      {emp.position}
                      <br />
                      {emp.city}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default MapPage;