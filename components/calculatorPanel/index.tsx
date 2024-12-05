import React, { useState } from "react";
import { add } from "@/utils/add";
import styles from "./CalculatorPanel.module.css";

const CalculatorPanel: React.FC = () => {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(value);
      setError("");
      setTotal(`${sum}`);
    } catch (e) {
      setTotal("");
      setError((e as Error).message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.panel}>
      <h1 className={styles.title}>String Calculator</h1>
      <div>
        <label htmlFor="calcInput" className={styles.label}>
          Enter String to be calculated
        </label>
        <textarea
          id="calcInput"
          name="calc"
          required
          placeholder="Enter your string to be calculated"
          className={styles.input}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={handleCalculate}
          id="calculateButton"
          className={styles.button}
        >
          Calculate
        </button>
      </div>
      <div>
        {error ? (
          <h4 data-testid="errorMsg" id="errorMsg" className={styles.error}>
            {error}
          </h4>
        ) : (
          <h4 id="totalSum" className={styles.total}>
            Total Sum: {total}
          </h4>
        )}
      </div>
    </div>
  );
};

export default CalculatorPanel;
