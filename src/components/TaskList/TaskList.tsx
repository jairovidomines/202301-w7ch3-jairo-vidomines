import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";

const TaskList = (): JSX.Element => {
  const { loadTasks } = useApi();

  const list = useAppSelector((state) => {
    return state.tasks;
  });

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <ul className="tasklist">
      {list.map((item, position) => (
        <TaskCard task={item} position={position} />
      ))}
    </ul>
  );
};

export default TaskList;
