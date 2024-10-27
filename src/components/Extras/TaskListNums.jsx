const TaskListNums = ({ data }) => {
  const taskData = [
    {
      number: data.taskCount.new,
      text: "New Task",
      bg: "bg-red-400",
      hover: "bg-red-600",
    },
    {
      number: data.taskCount.completed,
      text: "Completed",
      bg: "bg-blue-400",
      hover: "bg-blue-600",
    },
    {
      number: data.taskCount.active,
      text: "Accepted",
      bg: "bg-green-400",
      hover: "bg-green-600",
    },
    {
      number: data.taskCount.failed,
      text: "Failed",
      bg: "bg-yellow-400",
      hover: "bg-yellow-600",
    },
  ];

  return (
    <div className="flex w-full justify-between gap-5 mt-10">
      {taskData.map((item, i) => {
        return (
          <div
            key={i}
            className={`py-6 px-9 flex-1 rounded-xl  ${item.bg} hover:${item.hover} duration-300 cursor-pointer`}
          >
            <h2 className="text-2xl font-semibold">{item.number}</h2>
            <h3 className="text-xl font-medium">{item.text}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListNums;
