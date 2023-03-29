// components/ExampleComponent.js
import styles from '../styles/styles.module.css';

function ExampleComponent() {
  return (
    <div>
      <h1 className={styles.text-dark-blue}>Dark Blue Text</h1>
      <h2 className={styles.text-bronze}>Bronze Text</h2>
      <div className={styles.bg-dark-blue}>
        <p className={styles.text-bronze}>Text on dark blue background</p>
      </div>
      <div className={styles.bg-bronze}>
        <p className={styles.text-dark-blue}>Text on bronze background</p>
      </div>
    </div>
  );
}

export default ExampleComponent;
