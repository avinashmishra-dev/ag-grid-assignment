import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columnDefs } from "../../constants/columnDefs";

const defaultColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  floatingFilter: true,
  minWidth: 120,
};

const AgTable = ({ data, activeDataHandler }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 2px 25px rgba(0,0,0,0.06)",
        height: 660,
      }}
    >
      <h2 className="font-bold text-2xl">AG Grid <span className="block font-light text-xs text-red-600 mt-1">Toggle the status to see the updated Dash info </span></h2>
      <div className="ag-theme-alpine mt-5" style={{ height: 570 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          pagination
          paginationPageSize={10}
          defaultColDef={defaultColDef}
          animateRows
          rowHeight={44}
          headerHeight={46}
          context={{
            activeDataHandler,
          }}
        />
      </div>
    </div>
  );
};

export default AgTable;
