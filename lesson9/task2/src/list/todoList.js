import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

const handleListClicks = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (isCheckbox) {
    onToggleTask(e);
    return;
  }

  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClicks);
};
