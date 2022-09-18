import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';

import {
  deleteTodoAsync,
  editTodoAsync,
  getTodoAsync,
  toggleTodoAsync,
} from '../../api';
import { Loading } from '../Loading/Loading';
import './TodoCard.css';

import { TextField, Button, Modal, Box } from '@mui/material';

export const TodoCard = () => {
  const { todos, isLoading } = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [currentId, setCurrentId] = useState('');

  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);
    setCurrentId(id);
  };
  const handleClose = () => setOpen(false);

  const deleteTodo = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  const toggleIsCompleted = (id, isCompleted) => {
    dispatch(toggleTodoAsync({ id, data: { isCompleted } }));
  };

  const handleEdit = (id, content) => {
    setOpen(!open);
    // dispatch(editTodoAsync({ id, data: text }));
    if (text.length < 3) {
      alert('Task cannot be less than 3 letter or empty');
    } else {
      dispatch(editTodoAsync({ id, data: { content } }));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(getTodoAsync());
    console.log(localStorage.getItem('username'));
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div>
      {todos.length === 0 && (
        <p className="empytlist">Your todo list is empty.</p>
      )}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.isCompleted ? 'todo-completed' : ''}
          >
            {todo.content}
            <div className="icons">
              <Checkbox
                checked={todo.isCompleted}
                sx={{ color: '#fff' }}
                onClick={() => toggleIsCompleted(todo.id, !todo.isCompleted)}
              />
              <button
                type="button"
                title="delete"
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                <DeleteIcon />
              </button>
              <button
                type="button"
                title="edit"
                className="edit-btn"
                onClick={() => handleOpen(todo.id)}
              >
                <EditIcon />
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <Button
                    onClick={() => handleEdit(currentId, text)}
                    variant="outlined"
                  >
                    Edit Task
                  </Button>
                </Box>
              </Modal>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
