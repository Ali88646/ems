import AllTasks from "../Extras/AllTasks";
import CreateTask from "../Extras/CreateTask";
import Header from "../Extras/Header";

const AdminDashboard = ({ setUser }) => {
  return (
    <div className="h-screen w-full p-10 flex flex-col">
      <Header setUser={setUser} />
      <div className="w-full flex justify-between gap-3">
        <CreateTask />
        <AllTasks />
      </div>
    </div>
  );
};

export default AdminDashboard;
