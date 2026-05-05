import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user-slice/fetchuser",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      console.log("ALL USERS:", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getOneUser = createAsyncThunk(
  "user-slice/getOneUser",
  async (username, thunkAPI) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      console.log("SINGLE USER:", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    oneUser: null,
    loading: false,
    error: null,
    count: 0,
  },
  reducers: {
    increaseCount: (state) => {
      state.count++;
    },
    decrementCount: (state) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.oneUser = action.payload;
      })
      .addCase(getOneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { increaseCount, decrementCount } = userSlice.actions;
export default userSlice.reducer;
