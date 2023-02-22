import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasksStructure } from "../../types";

export const initialState = [] as tasksStructure;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as tasksStructure,
  reducers: {
    loadTasks: (currentTasks, action: PayloadAction<tasksStructure>) =>
      (currentTasks = [...action.payload]),
  },
});

export default tasksSlice;

export const { loadTasks: loadTasksActionCreator } = tasksSlice.actions;