import styles from './page.module.scss';

export default async function Home() {
  return (
    <>
      <p className={styles.description}></p>
      <h2 className={styles.title}></h2>
    </>
  );
}
