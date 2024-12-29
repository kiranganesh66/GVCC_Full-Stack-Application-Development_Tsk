import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ChartDashboard.css"; 

function ChartDashboard() {
  const [chartData, setChartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          "http://localhost:5000/api/users/chart",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setChartData(response.data);
      } catch (error) {
        console.error(error);

        if (error.response && error.response.status === 401) {
          alert("Session expired. Please log in again.");
          localStorage.removeItem("token");
          navigate("/login"); 
        } else {
          alert("Failed to fetch chart data. Please try again.");
        }
      }
    };

    fetchChartData();
  }, [navigate]);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Dashboard Analytics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" tick={{ fill: "#555" }} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartDashboard;
