import React from "react";

export const departmentRenderer = (params) => {
  const dept = params.value;

  const departmentStyles = {
    Engineering: { color: "#1d4ed8", bg: "#dbeafe" },
    Marketing: { color: "#be185d", bg: "#fce7f3" },
    Sales: { color: "#15803d", bg: "#dcfce7" },
    HR: { color: "#a16207", bg: "#fef3c7" },
    Finance: { color: "#6d28d9", bg: "#ede9fe" },
  };

  const style = departmentStyles[dept] ?? {
    color: "#374151",
    bg: "#f3f4f6",
  };

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        color: style.color,
        backgroundColor: style.bg,
        whiteSpace: "nowrap",
      }}
    >
      {dept}
    </span>
  );
};
