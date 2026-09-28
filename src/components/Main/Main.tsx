import styles from "./main.module.css";
import Header from "./../Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.div}>
          <p className={styles.p1}>so, you want to travel to</p>
          <p className={styles.p2}>SPACE</p>
          <p className={styles.p3}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.div2}>
          <button className={styles.botao}>EXPLORE</button>
        </div>
      </main>
    </>
  );
}
