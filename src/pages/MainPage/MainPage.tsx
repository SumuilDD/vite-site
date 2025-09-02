import styles from "./MainPage.module.scss";
import { Counter } from "../../features/Counter/Counter";
import { UserCard } from "../../entities/UserCard/UserCard";

export const MainPage = () => (
  <main className={styles.main}>
    <h1>Головна сторінка (FSD demo)</h1>
    <Counter />
    <UserCard name="Іван" age={22} />
  </main>
);