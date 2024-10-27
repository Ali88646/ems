import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { colors } from "../../utils/localStorage";
const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="h-[55%] py-5 w-ful  mt-10 rounded-xl flex items-center justify-start gap-5 flex-nowrap overflow-x-auto "
    >
      {data.tasks.map((task, i) => {
        if (task.active) {
          return <AcceptTask key={i} data={task} bg={colors.active} />;
        }

        if (task.NewTask) {
          return <NewTask key={i} data={task} bg={colors.newTask} />;
        }
        if (task.completed) {
          return <CompleteTask key={i} data={task} bg={colors.completed} />;
        }
        if (task.failed) {
          return <FailedTask key={i} data={task} bg={colors.failed} />;
        }
      })}
      {/* <NewTask />
      <AcceptTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;
