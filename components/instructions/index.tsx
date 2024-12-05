import React from "react";
import styles from "./UserInstruction.module.css";

const UserInstruction: React.FC = () => {
  return (
    <div className={styles.instructionContainer}>
      <h2 className={styles.title}>How to Use the String Calculator</h2>
      <ol className={styles.list}>
        <li>
          Enter a string of numbers separated by commas into the input box. For
          example:
          <pre className={styles.preformatted}>1,2,3</pre>
        </li>
        <li>
          You can also use newlines between numbers. For example:
          <pre className={styles.preformatted}>1{`\n`}2,3</pre>
        </li>
        <li>
          To use a custom delimiter, start your input with:
          <pre className={styles.preformatted}>
            //[delimiter]{`\n`}[numbers]
          </pre>
          For example:
          <pre className={styles.preformatted}>//;{`\n`}1;2</pre>
        </li>
        <li>
          Click the <strong>"Calculate"</strong> button to get the sum of the
          numbers.
        </li>
        <li>
          If you enter a negative number, you will see an error message listing
          all the negative numbers. For example:
          <pre className={styles.preformatted}>
            negative numbers not allowed: -1, -2
          </pre>
        </li>
      </ol>
      <p className={styles.note}>
        Make sure your input is valid, as errors in formatting will show an
        error message. Refer to the examples above for guidance.
      </p>
    </div>
  );
};

export default UserInstruction;
