import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, api, setAuthHeader } from "../api/api";

export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signin`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("Login success", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.data.error);
  }
});

export const register = createAsyncThunk("auth/signup", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signup`, userData);
    localStorage.setItem("jwt", data.jwt);

    console.log("Register success ", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.data.error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.data.error);
  }
});

export const getUserProfile = createAsyncThunk(
  "home/user/profile",
  async (jwt) => {
    setAuthHeader(jwt, api);
    try {
      const { data } = await api.get(`/home/user/profile`);

      console.log("user profile success", data);

      return data;
    } catch (error) {
      console.log("catch error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const getUserList = createAsyncThunk("home/user", async (jwt) => {
  setAuthHeader(jwt, api);
  try {
    const { data } = await api.get(`/home/user`);
    localStorage.setItem("jwt", data.jwt);

    console.log("user list success ", data);
    return data;
  } catch (error) {
    console.log("catch error", error);
    throw Error(error.response.data.error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    jwt: null,
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.loggedIn = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.loggedIn = true;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loggedIn = false;
        state.loading = false;
        state.error = null;
        state.jwt = null;
        state.users = [];
      });
  },
});

export default authSlice.reducer;
