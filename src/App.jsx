import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import AgTable from "./components/GridTable/AGTable";
import { employees } from "./constants/employeesData";

function App() {
  const [empData, setEmpData] = useState(employees);

  const activeDataHandler = (updatedData)=>{
    setEmpData(updatedData)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Employee Dashboard
          </h1>
          <p className="text-slate-600">
            Comprehensive view of organizational workforce data
          </p>
        </div>
        <Cards employeesData={empData} />
        <div className="mt-10">
          <AgTable data={empData} activeDataHandler={activeDataHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
