import { useCallback } from "react";
import {
  loadTasksActionCreator,
  removeTasksActionCreator,
} from "../store/features/tasksSlice";
import { useAppDispatch } from "../store/hooks";
import { tasksStructure } from "../types";

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

  return { loadTasks, deleteTasks };
};

export default useApi;
