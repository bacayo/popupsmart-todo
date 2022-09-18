import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://63123e4bb466aa9b0386f8e2.mockapi.io/';
axios.defaults.baseURL = BASE_URL;

export const getTodoAsync = createAsyncThunk(
  'todoSLice/getTodoAsync',
  async () => {
    const response = await axios.get('todos');
    return response.data;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'deleteTodoAsync',
  async (id, thunkAPI) => {
    const response = await axios.delete(`todos/${id}`);
    thunkAPI.dispatch(getTodoAsync());
    return response.data;
  }
);

export const addNewTodoAsync = createAsyncThunk(
  'addNewTodoAsync',
  async (data, thunkAPI) => {
    const response = await axios.post('todos', data);
    thunkAPI.dispatch(getTodoAsync());
    return response.data;
  }
);
export const toggleTodoAsync = createAsyncThunk(
  'toggleTodoAsync',
  async ({ id, data }) => {
    const response = await axios.put(`todos/${id}`, data);
    return response.data;
  }
);

export const editTodoAsync = createAsyncThunk(
  'editTodoAsync',
  async ({ id, data }, thunkAPI) => {
    const response = await axios.put(`todos/${id}`, data);
    thunkAPI.dispatch(getTodoAsync());
    return response.data;
  }
);
