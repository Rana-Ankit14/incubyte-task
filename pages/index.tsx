import Head from "next/head";
import styles from "@/pages/index.module.css";
import UserInstruction from "@/components/instructions";
import CalculatorPanel from "@/components/calculatorPanel";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>String Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CalculatorPanel />
      </main>
      <aside className={styles.aside}>
        <UserInstruction />
      </aside>
    </div>
  );
}
