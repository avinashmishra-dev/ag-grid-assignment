import React from "react";

export const statusRenderer = (params) => {
  const isActive = params.value;
  const { activeDataHandler } = params.context;

  const toggleStatus = () => {
    const updatedRow = {
      ...params.data,
      isActive: !isActive,
    };
    params.node.setDataValue("isActive", !isActive);
    activeDataHandler((preVal) =>
      preVal?.map((ele) => (ele.id === updatedRow.id ? updatedRow : ele))
    );
  };

  return (
    <button
      onClick={toggleStatus}
      style={{
        padding: "4px 12px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        color: isActive ? "#166534" : "#7f1d1d",
        backgroundColor: isActive ? "#dcfce7" : "#fee2e2",
      }}
    >
      {isActive ? "Active" : "Inactive"}
    </button>
  );
};
