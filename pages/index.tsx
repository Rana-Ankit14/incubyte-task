import Head from "next/head";
import styles from "@/pages/index.module.css";
import { useState } from "react";
import { add } from "utils/add";

export default function HomePage() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(value);
      setTotal(`${sum}`);
      setError("");
    } catch (e) {
      setTotal("");
      setError((e as Error).message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>String Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>String Calculator</h1>
        <div>
          <label htmlFor="calc" className={styles.label}>
            Enter String to be calculated
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="calc"
            name="calc"
            required
            placeholder="Enter your string to be calculated"
            className={styles.input}
          />
        </div>
        <div>
          <button onClick={handleCalculate} className={styles.button}>
            Calculate
          </button>
        </div>
        <div>
          <h4 className={styles.total}>Total Sum : {total}</h4>
          {error && <h4 className={styles.error}>{error}</h4>}
        </div>
      </main>
    </div>
  );
}
