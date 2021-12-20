import { renderTasks } from './renderer';
import { setItem } from './storage';
import { getTasksList, deleteTask } from './tasksGateway';

export const onDeleteTask = (e) => {
  const taskId = e.target.closest('.list-item').dataset.id;

  deleteTask(taskId)
    .then(getTasksList)
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);

      renderTasks();
    });
};
