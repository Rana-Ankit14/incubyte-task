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
      <main>
        <h1>String Calculator</h1>
        <div>
          <label htmlFor="calc">Enter String to be calculated</label>

          <input
            onChange={handleChange}
            type="text"
            id="calc"
            name="calc"
            required
            placeholder="Enter your string to be calculated"
          />
        </div>
        <div>
          <button onClick={handleCalculate}>Calculate</button>
        </div>
        <div>
          <h4>Total Sum : {total}</h4>
        </div>
        <div>
          <h4>{error}</h4>
        </div>
      </main>
    </div>
  );
}
