import { departmentRenderer } from "../utils/departmentRenderer";
import { performanceRenderer } from "../utils/performanceRenderer";
import { projectsRenderer } from "../utils/projectsRenderer";
import { salaryRenderer } from "../utils/salaryRenderer";
import { statusRenderer } from "../utils/statusRenderer";
import { positionRenderer } from "../utils/positionRenderer";

export const columnDefs = [
  { headerName: "ID", field: "id", width: 80 },
  {
    headerName: "Name",
    valueGetter: (p) => `${p.data.firstName} ${p.data.lastName}`,
  },
  { headerName: "Email", field: "email" },
  {
    headerName: "Department",
    field: "department",
    cellRenderer: departmentRenderer,
  },
  { headerName: "Position", field: "position", cellRenderer: positionRenderer },
  { headerName: "Salary", field: "salary", cellRenderer: salaryRenderer },
  {
    headerName: "Performance",
    field: "performanceRating",
    cellRenderer: performanceRenderer,
  },
  {
    headerName: "Projects",
    field: "projectsCompleted",
    cellRenderer: projectsRenderer,
  },
  { headerName: "Location", field: "location" },
  { headerName: "Status", field: "isActive", cellRenderer: statusRenderer },
  { headerName: "Manager", field: "manager" },
  { headerName: "Skills", field: "skills" },
];
