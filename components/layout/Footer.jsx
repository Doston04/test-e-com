import styles from "./Layout.module.css";

export default function Footer() {
  const customClasses = {
    container: "container",
  };
  return (
    <footer>
      <div className={`${styles.footer_inner} container`}>Footer</div>
    </footer>
  );
}
