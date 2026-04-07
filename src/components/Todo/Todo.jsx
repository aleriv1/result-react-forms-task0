import styles from "./Todo.module.scss";

export const Todo = ({ todo, completed = false }) => {
  return (
    <li className={`${styles.todo} ${completed ? styles.completed : ""}`}>
      {todo}
    </li>
  );
};
