import { Todo } from "../Todo/Todo";
import styles from "./TodoList.module.scss";

export const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      <ul className={styles.list}>
        {todos.length > 0 ? (
          todos
            .slice(0, 6)
            .map(({ id, title, completed }) => (
              <Todo key={id} todo={title} completed={completed} />
            ))
        ) : (
          <p className={styles.empty}>Загрузка задач...</p>
        )}
      </ul>
    </div>
  );
};
