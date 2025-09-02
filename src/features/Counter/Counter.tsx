import { useState } from "react";
import styles from "./Counter.module.scss";
import { Button } from "D:/робота/FRONTEND/vite-site/src/shared/ui/Button/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <span>Лічильник: {count}</span>
      <Button onClick={() => setCount(count + 1)}>Додати</Button>
      <Button onClick={() => setCount(count - 1)}>Відняти</Button>
    </div>
  );
};