// src/components/Dashboard.js
import axios from 'axios';
import React, { useEffect, useState, useRef } from "react";
import { Chart, registerables } from "chart.js";
import "./Dashboard.css";
Chart.register(...registerables);




const Dashboard = () => {
    const [metrics, setMetrics] = useState({});
    const chartRef = useRef(null);
useEffect(() => {
  axios
    .get("http://localhost:3001/api/metrics")
    .then((response) => {
      setMetrics(response.data);
      console.log("Fetched data:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);


  useEffect(() => {
    fetch("/api/metrics")
      .then((response) => response.json())
      .then((data) => {
      setMetrics(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    if (metrics.growthRate) {
      const ctx = document.getElementById("growthRateChart").getContext("2d");
      if (chartRef.current) {
      chartRef.current.destroy(); // Destroy existing chart
    }
      const chartData = {
        labels: metrics.growthRate.labels,
        datasets: [
          {
            label: "Growth Rate",
            data: metrics.growthRate.data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      };

      const config = {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Growth Rate",
            },
          },
        },
      };

      const chart = new Chart(ctx, config);
      chartRef.current = chart;
    }
  }, [metrics.growthRate]);

  return (
    <>
      <h1 className='title-name'>Community Dashboard</h1>
    <div className="dashboard-container">
      <div className="metrics-container">
        <h2>Total Members: {metrics.totalMembers}</h2>
        <h2>Engagement Rate: {metrics.engagementRate}</h2>
        <h2>Active Members: {metrics.activeMembers}</h2>
        <h2>Inactive Members: {metrics.inactiveMembers}</h2>
      </div>
      <div className="chart-container">
        <h2>Growth Rate:</h2>
        <canvas id="growthRateChart"></canvas>
      </div>
      <div className="top-contributors">
        <h2 className='top-contributors-title'>Top Contributors:</h2>
        <ul>
          {metrics.topContributors &&
            metrics.topContributors.map((user) => (
              <li key={user.id}>
                {user.name} - {user.messages} messages
                {" "}
              </li>
            ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
