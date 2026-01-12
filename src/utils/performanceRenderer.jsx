export const performanceRenderer = (params) => {
  const value = params.value ?? 0;
  const percentage = (value / 5) * 100;

  let barColor = "#2563eb";
  if (value >= 4.5) barColor = "#16a34a";
  else if (value < 4) barColor = "#d97706";

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          height: 6,
          borderRadius: 4,
          backgroundColor: "#e5e7eb",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: barColor,
          }}
        />
      </div>
      <div style={{ fontSize: 12, marginTop: 4, color: "#334155" }}>
        {value.toFixed(1)} / 5
      </div>
    </div>
  );
};
