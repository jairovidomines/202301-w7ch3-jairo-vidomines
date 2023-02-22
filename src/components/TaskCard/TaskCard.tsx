import useApi from "../../hooks/useApi";
import { taskStructure } from "../../types";
import TaskCardStyled from "./TaskCardStyled";
import "./TaskCardStyled.tsx";

interface TaskCardProps {
  task: taskStructure;
  position: number;
}

const TaskCard = ({ task: { name, id } }: TaskCardProps): JSX.Element => {
  const { deleteTasks } = useApi();
  return (
    <TaskCardStyled className="task">
      <span className="task__to-do">{name}</span>
      <button className="task__delete" onClick={() => deleteTasks(id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </TaskCardStyled>
  );
};

export default TaskCard;
