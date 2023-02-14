import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = (): JSX.Element => {
  return (
    <li className="tasklist">
      <TaskCard />
    </li>
  );
};

export default TaskList;
