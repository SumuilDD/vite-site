import styles from "./UserCard.module.scss";

interface UserCardProps {
  name: string;
  age: number;
}

export const UserCard = ({ name, age }: UserCardProps) => (
  <div className={styles.card}>
    <b>Користувач:</b> {name} <br />
    <b>Вік:</b> {age}
  </div>
);