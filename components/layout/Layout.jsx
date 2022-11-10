import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}
