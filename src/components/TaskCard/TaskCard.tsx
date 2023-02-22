import { taskStructure } from "../../types";
import "./TaskCard.css";

interface TaskCardProps {
  task: taskStructure;
}

const TaskCard = ({ task: { name, isDone } }: TaskCardProps): JSX.Element => {
  return (
    <ul className="task">
      <span className="task__to-do">{name}</span>
      <span>{isDone}</span>
    </ul>
  );
};

export default TaskCard;
