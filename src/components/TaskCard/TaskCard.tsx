import useApi from "../../hooks/useApi";
import { taskStructure } from "../../types";
import "./TaskCard.css";

interface TaskCardProps {
  task: taskStructure;
  position: number;
}

const TaskCard = ({ task: { name, id } }: TaskCardProps): JSX.Element => {
  const { deleteTasks } = useApi();
  return (
    <span className="task">
      <span className="task__to-do">{name}</span>
      <button className="task__delete" onClick={() => deleteTasks(id)}>
        🗑️
      </button>
    </span>
  );
};

export default TaskCard;
