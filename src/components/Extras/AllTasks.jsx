import { useContext } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const { userData } = useContext(AuthContext);

  const tasksData = userData.employees.reduce((acc, preCur) => {
    const reducedTasks = preCur.tasks.reduce((acc, cur) => {
      let username = "";
      preCur.tasks.forEach((item) => {
        if (JSON.stringify(item) === JSON.stringify(cur)) {
          username = preCur.firstName;
        }
      });

      return [...acc, { ...cur, username }];
    }, []);
    return [...acc, ...reducedTasks];
  }, []);

  // console.log(tasksData);

  return (
    <div
      id="allTasks"
      className="bg-[#1c1c1c] px-4 w-1/2 mt-5 rounded-2xl h-[80vh] overflow-y-auto relative"
    >
      <div className="w-full sticky top-0 bg-[#1c1c1c] pt-3">
        <h1 className="text-2xl font-medium">All Tasks {tasksData.length}</h1>

        <div
          className={`bg-red-500  cursor-pointer duration-300 flex justify-between py-2 px-5 rounded-md  text-lg font-semibold mt-3`}
        >
          <p className="flex-1">S.No</p>
          <h2 className="flex-1 ">Title</h2>
          <h2 className="flex-1 ml-2">User</h2>
          <h3 className="flex-1 ">Priority</h3>
        </div>
      </div>

      {tasksData.map((task, i) => {
        return (
          <div
            key={i}
            className={`cursor-pointer duration-300 flex justify-between py-2 px-5 rounded-md mt-3 text-lg font-semibold border ${
              task.priority === "high"
                ? "border-red-500 hover:bg-red-500"
                : task.priority === "medium" &&
                  "border-emerald-500 hover:bg-emerald-500"
            }`}
          >
            <p className="flex-1">{i + 1}.</p>
            <h2 className="flex-1">{task.title}</h2>
            <h2 className="flex-1 ml-2">{task.username}</h2>
            <h3 className="flex-1">{task.priority}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllTasks;
