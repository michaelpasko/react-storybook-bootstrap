// redux/actions.js
import { actionTypes } from './actionTypes';

const { ADD_TODO } = actionTypes;
let nextTodoId = 0;


const addTodo = ( content ) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});


export {
    addTodo
}