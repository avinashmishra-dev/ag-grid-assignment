import React from "react";

export const projectsRenderer = (params) => {
  const value = params.value ?? 0;

  let label = "Medium";
  let color = "#2563eb";
  let bg = "#dbeafe";

  if (value >= 15) {
    label = "High";
    color = "#dc2626";
    bg = "#fee2e2";
  } else if (value <= 6) {
    label = "Low";
    color = "#16a34a";
    bg = "#dcfce7";
  }

  const percentage = Math.min((value / 20) * 100, 100);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          height: 6,
          borderRadius: 4,
          backgroundColor: "#e5e7eb",
          overflow: "hidden",
          marginBottom: 4,
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: color,
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 12 }}>{value} projects</span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color,
            backgroundColor: bg,
            padding: "2px 6px",
            borderRadius: 999,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
