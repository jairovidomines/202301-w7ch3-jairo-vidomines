import { useCallback } from "react";
import {
  addTasksActionCreator,
  loadTasksActionCreator,
  removeTasksActionCreator,
} from "../store/features/tasksSlice";
import { useAppDispatch } from "../store/hooks";
import { tasksStructure, taskStructure } from "../types";

const useApi = () => {
  const apiUrl = "https://todo-zkz9.onrender.com/to-do";
  const dispatch = useAppDispatch();

  const loadTasks = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const tasksApi = (await response.json()) as tasksStructure;

      dispatch(loadTasksActionCreator(tasksApi));
    } catch (error) {}
  }, [apiUrl, dispatch]);

  const deleteTasks = useCallback(
    async (id: number) => {
      try {
        await fetch(`${apiUrl}/${id}`, {
          method: "DELETE",
        });
        dispatch(removeTasksActionCreator(id));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [apiUrl, dispatch]
  );

  const addTask = async (event: any, task: taskStructure) => {
    event.preventDefault();

    try {
      await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          id: task.id,
          name: task.name,
          isDone: task.isDone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      return (error as Error).message;
    }
    dispatch(addTasksActionCreator(task));
  };

  return { loadTasks, deleteTasks, addTask };
};

export default useApi;
