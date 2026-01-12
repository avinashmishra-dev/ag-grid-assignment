import { useMemo } from "react";
import Card from "./Card";
import { Award, DollarSign, TrendingUp, Users } from "lucide-react";

const Cards = ({ employeesData }) => {
  //stats calculation
  const stats = useMemo(() => {
    const active = employeesData.filter((e) => e.isActive).length;
    const filteredEmp = employeesData.filter((e) => e.isActive);
    const avgSalary = Math.round(
      filteredEmp.reduce((sum, e) => sum + e.salary, 0) / filteredEmp.length
    );
    const avgPerformance = (
      filteredEmp.reduce((sum, e) => sum + e.performanceRating, 0) /
      filteredEmp.length
    ).toFixed(2);
    const totalProjects = filteredEmp.reduce(
      (sum, e) => sum + e.projectsCompleted,
      0
    );
    return { active, avgSalary, avgPerformance, totalProjects };
  }, [employeesData]);

  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="flex-1 min-w-62.5">
        <Card
          cardData={stats.active}
          cardTitle="Active Employees"
          borderLeftColor="border-blue-500"
          Icon={<Users className="w-12 h-12 text-blue-500 opacity-80" />}
        />
      </div>

      <div className="flex-1 min-w-62.5">
        <Card
          cardData={`${stats.avgSalary}`}
          cardTitle="Avg Salary"
          borderLeftColor="border-green-500"
          Icon={<DollarSign className="w-12 h-12 text-green-500 opacity-80" />}
        />
      </div>

      <div className="flex-1 min-w-62.5">
        <Card
          cardData={`${stats.avgPerformance}`}
          cardTitle="Avg Performance"
          borderLeftColor="border-purple-500"
          Icon={<Award className="w-12 h-12 text-purple-500 opacity-80" />}
        />
      </div>

      <div className="flex-1 min-w-62.5">
        <Card
          cardData={`${stats.totalProjects}`}
          cardTitle="Total Projects"
          borderLeftColor="border-orange-500"
          Icon={<TrendingUp className="w-12 h-12 text-orange-500 opacity-80" />}
        />
      </div>
    </div>
  );
};

export default Cards;
