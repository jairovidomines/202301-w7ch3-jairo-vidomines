import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasksStructure } from "../../types";

export const initialState = [] as tasksStructure;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as tasksStructure,
  reducers: {
    loadTasks: (currentTasks, action: PayloadAction<tasksStructure>) =>
      (currentTasks = [...action.payload]),

    removeTasks: (currentTasks, action: PayloadAction<number>) =>
      currentTasks
        .filter((item) => item.id !== action.payload)
        .map((item, position) => ({ ...item, id: position })),
  },
});

export default tasksSlice;

export const {
  loadTasks: loadTasksActionCreator,
  removeTasks: removeTasksActionCreator,
} = tasksSlice.actions;
