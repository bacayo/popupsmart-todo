import { createSlice } from '@reduxjs/toolkit';

import {
  getTodoAsync,
  addNewTodoAsync,
  toggleTodoAsync,
  editTodoAsync,
} from '../../api';

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },
  extraReducers: {
    [getTodoAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodoAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [getTodoAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [addNewTodoAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const { id, isCompleted } = action.payload;
      const index = state.todos.findIndex((item) => item.id === id);
      state.todos[index].isCompleted = isCompleted;
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      // const { id, content } = action.payload;
      // const index = state.todos.findIndex((item) => item.id === id);
      // state.todos[index].content = action.payload;
      state.isLoading = false;
      // const { id } = action.payload;
      // const index = state.todos.findIndex((item) => item.id === id);
      // console.log(index);
      console.log(action.payload);
    },
  },
});

export default todoSlice.reducer;
