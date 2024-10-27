import Header from "../Extras/Header";
import TaskListNums from "../Extras/TaskListNums";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, setUser }) => {
  // console.log(data);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header data={data} setUser={setUser} />
      <TaskListNums data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
