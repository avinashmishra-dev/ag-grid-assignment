import React from "react";

export const salaryRenderer = (params) => {
  const salary = params.value ?? 0;

  let label = "Mid";
  if (salary < 70000) label = "Entry";
  else if (salary >= 100000 && salary < 140000) label = "Senior";
  else if (salary >= 140000) label = "Executive";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 14,
        fontWeight: 500,
        color: "#0f172a",
        whiteSpace: "nowrap",
      }}
    >
      ${salary.toLocaleString()}
      <span style={{ fontSize: 12, color: "#64748b" }}>· {label}</span>
    </span>
  );
};
