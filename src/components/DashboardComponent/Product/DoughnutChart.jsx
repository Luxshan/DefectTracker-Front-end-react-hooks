import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Platinum", "Gold", "Silver", "Bronze"],
  datasets: [
    {
      data: [3, 11, 4, 2],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#20c997"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#20c997"]
    }
  ]
};

export default function DoughnutChart({ isDark }) {
  return (
    <div>
      <Doughnut
        data={data}
        height={280}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: isDark ? "white" : "black"
            }
          }
        }}
      />
    </div>
  );
}
