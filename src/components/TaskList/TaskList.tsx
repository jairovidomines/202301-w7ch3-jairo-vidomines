import "./TaskListStyled.tsx";
import TaskCard from "../TaskCard/TaskCard";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import TaskListStyled from "./TaskListStyled";

const TaskList = (): JSX.Element => {
  const { loadTasks } = useApi();

  const list = useAppSelector((state) => {
    return state.tasks;
  });

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <TaskListStyled className="tasklist">
      {list.map((item, position) => (
        <TaskCard
          task={item}
          position={position}
          key={Math.floor(Math.random() * 10000)}
        />
      ))}
    </TaskListStyled>
  );
};

export default TaskList;
