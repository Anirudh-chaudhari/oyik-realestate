import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        Page not found
      </p>
      <Link href="/" className={styles.link}>
        Return to homepage
      </Link>
    </main>
  );
}