import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.get("/api/tasks", {
        params: { status },
      });
      console.log("fetch tasks: ", data);
      return data;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchUsersTasks = createAsyncThunk(
  "tasks/fetchUsersTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.get("/api/tasks/user", {
        params: { status },
      });
      console.log("fetch users tasks: ", data);
      return data;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchTasksById = createAsyncThunk(
  "tasks/fetchTasksById",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      console.log("hi");
      const { data } = await api.get(`/api/tasks/${taskId}`);
      console.log("fetch  tasks by id: ", data);
      return data;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.post(`/api/tasks`, taskData);
      console.log("create task: ", data);
      return data;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updatedTaskData }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.put(`/api/tasks/${id}`, updatedTaskData);
      console.log("updated task: ", data);
      return data;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

export const assignTaskToUser = createAsyncThunk(
  "tasks/assignTaskToUser",
  async ({ taskId, userId }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.put(
        `/api/tasks/${taskId}/user/${userId}/assigned`
      );
      console.log("assigned  task: ", data);
      return data;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.delete(`/api/tasks/${taskId}`);
      console.log("task delete");
      return taskId;
    } catch (error) {
      console.log("error ", error);
      throw Error(error.response.data.error);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
    taskDetails: null,
    usersTask: [],
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        PopStateEvent.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchUsersTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.usersTask = action.payload;
      })
      .addCase(fetchTasksById.fulfilled, (state, action) => {
        state.loading = false;
        state.taskDetails = action.payload;
      })
      .addCase(fetchUsersTasks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        );
      })
      .addCase(assignTaskToUser.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        );
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
