import { useContext, useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [date, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  const { userData, setUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    const createdTask = {
      title,
      description,
      date,
      // asignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setNewTask(createdTask);

    const data = userData.employees;

    data.forEach((item) => {
      if (asignTo.toLowerCase() === item.firstName.toLowerCase()) {
        item.tasks.push(createdTask);
        item.taskCount.newTask = item.taskCount.newTask + 1;
      }
    });

    setUserData((data) => {
      return [data.admin, data];
    });

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  const twoWayHandler = (e, set) => {
    set(e.target.value);
  };

  return (
    <div className="w-1/2 flex flex-col justify-center bg-[#1c1c1c] p-4 rounded-2xl mt-5 h-[80vh]">
      <h3 className="text-2xl font-semibold  mt-5 mx-auto">Create Task</h3>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start flex-col justify-center w-4/5 gap-5 mt-5 mx-auto "
      >
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-semibold">Task Title</h3>
          <input
            value={title}
            onChange={(e) => {
              twoWayHandler(e, setTaskTitle);
            }}
            type="text"
            placeholder="Make a ui design"
            className="py-2 px-3 text-xl outline-none rounded-full border-2 border-red-500 bg-transparent placeholder:text-gray-500"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-semibold">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              twoWayHandler(e, setTaskDescription);
            }}
            className="py-2 px-3 text-xl outline-none rounded-2xl border-2 border-red-500 bg-transparent placeholder:text-gray-500"
            name=""
            id=""
            cols={"20"}
            rows={"4"}
          ></textarea>
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-semibold">Date</h3>
          <input
            value={date}
            onChange={(e) => {
              twoWayHandler(e, setTaskDate);
            }}
            className="py-2 px-3 text-xl outline-none rounded-full border-2 border-red-500 bg-transparent  "
            type="date"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-semibold">Assign to</h3>
          <input
            value={asignTo}
            onChange={(e) => {
              twoWayHandler(e, setAsignTo);
            }}
            className="py-2 px-3 text-xl outline-none rounded-full border-2 border-red-500 bg-transparent placeholder:text-gray-500"
            type="text"
            placeholder="Employee name"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-semibold">Category</h3>
          <input
            value={category}
            onChange={(e) => {
              twoWayHandler(e, setCategory);
            }}
            className="py-2 px-3 text-xl outline-none rounded-full border-2 border-red-500 bg-transparent placeholder:text-gray-500"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>
        <button className="w-2/3 mx-auto mt-5 bg-red-500 py-2 rounded full  text-xl font-semibold hover:bg-red-600 duration-300 hover:w-4/5">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
