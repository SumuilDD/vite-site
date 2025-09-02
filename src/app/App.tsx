import styles from "./App.module.scss";
import { Header } from "../widgets/Header/Header";
import { MainPage } from "../pages/MainPage/MainPage";

export const App = () => (
  <div className={styles.app}>
    <Header />
    <MainPage />
  </div>
);


