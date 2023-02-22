import { useCallback } from "react";
import { loadTasksActionCreator } from "../store/features/tasksSlice";
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

  return loadTasks;
};

export default useApi;
