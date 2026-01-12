export const positionRenderer = (params) => {
  const position = params.value;

  const positionMap = {
    "Junior Developer": {
      icon: "👩‍💻",
      color: "#1e40af",
      bg: "#e0e7ff",
    },
    "Senior Developer": {
      icon: "👨‍💻",
      color: "#1e3a8a",
      bg: "#c7d2fe",
    },
    "QA Engineer": {
      icon: "🧪",
      color: "#065f46",
      bg: "#d1fae5",
    },
    "DevOps Engineer": {
      icon: "⚙️",
      color: "#0f766e",
      bg: "#ccfbf1",
    },
    "Engineering Manager": {
      icon: "🧭",
      color: "#7c2d12",
      bg: "#ffedd5",
    },
    "Marketing Manager": {
      icon: "📢",
      color: "#9d174d",
      bg: "#fce7f3",
    },
    "Content Specialist": {
      icon: "✍️",
      color: "#7c2d12",
      bg: "#fde68a",
    },
    "VP Marketing": {
      icon: "🧠",
      color: "#4c1d95",
      bg: "#ede9fe",
    },
    "VP Sales": {
      icon: "📈",
      color: "#065f46",
      bg: "#dcfce7",
    },
    CTO: {
      icon: "👑",
      color: "#111827",
      bg: "#e5e7eb",
    },
    "HR Manager": {
      icon: "🧑‍🤝‍🧑",
      color: "#92400e",
      bg: "#fef3c7",
    },
    Recruiter: {
      icon: "🔍",
      color: "#92400e",
      bg: "#fef3c7",
    },
    "Financial Analyst": {
      icon: "📊",
      color: "#1e3a8a",
      bg: "#dbeafe",
    },
    "Finance Manager": {
      icon: "💼",
      color: "#4c1d95",
      bg: "#ede9fe",
    },
    "Senior Accountant": {
      icon: "🧾",
      color: "#374151",
      bg: "#f3f4f6",
    },
    "Sales Representative": {
      icon: "🤝",
      color: "#166534",
      bg: "#dcfce7",
    },
    "Sales Manager": {
      icon: "📋",
      color: "#14532d",
      bg: "#bbf7d0",
    },
    "Account Executive": {
      icon: "🎯",
      color: "#065f46",
      bg: "#dcfce7",
    },
  };

  const style = positionMap[position] || {
    icon: "👤",
    color: "#374151",
    bg: "#f3f4f6",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 600,
        color: style.color,
        backgroundColor: style.bg,
        whiteSpace: "nowrap",
      }}
    >
      <span>{style.icon}</span>
      <span>{position}</span>
    </span>
  );
};
